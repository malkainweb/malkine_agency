import { NextRequest } from "next/server";

const COOKIE_PREFIX = "sp_";
const CHECKOUT = "__checkout";
const CSP = "frame-ancestors 'self'";

const apex = (h: string) => h.replace(/^www\./, "");
const storeHosts = (host: string) => [apex(host), `www.${apex(host)}`];

const isCheckoutPath = (path: string) => /^\/checkouts?(\/|$)/.test(path);

// Script injected into proxied pages to route URLs back through /frame
const CLIENT = `(function (host, hosts) {
  var proxied = function (u) {
    try {
      var url = new URL(u, document.baseURI);
      if (hosts.indexOf(url.host) < 0 || url.pathname.indexOf("/cdn/") === 0) return null;
      var m = url.pathname.match(/^\\/frame\\/([^/]+)(\\/|$)/);
      if (m && hosts.indexOf(m[1]) >= 0) return location.origin + url.pathname + url.search + url.hash;
      return location.origin + "/frame/" + url.host + url.pathname + url.search + url.hash;
    } catch (e) { return null; }
  };
  var map = function (u) { return proxied(u) || u; };
  var isCheckout = function (u) {
    try { return /^\\/checkouts?(\\/|$)/.test(new URL(u, document.baseURI).pathname); } catch (e) { return false; }
  };
  var checkout = function () {
    var base = location.origin + "/frame/" + host + "/";
    if (!window.open(base + "${CHECKOUT}", "_blank")) location.href = base + "checkout";
  };

  var fetch0 = window.fetch;
  window.fetch = function (input, init) {
    input = input instanceof Request ? new Request(map(input.url), input) : map(String(input));
    return fetch0.call(this, input, init);
  };
  var open0 = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function () {
    arguments[1] = map(arguments[1]);
    return open0.apply(this, arguments);
  };
  ["pushState", "replaceState"].forEach(function (k) {
    var orig = history[k];
    history[k] = function (s, t, u) { return orig.call(this, s, t, u == null ? u : map(u)); };
  });
  var winOpen = window.open;
  window.open = function (u) {
    if (u && isCheckout(u)) u = location.origin + "/frame/" + host + "/${CHECKOUT}";
    else if (u) u = map(u);
    arguments[0] = u;
    return winOpen.apply(this, arguments);
  };
  var submit0 = HTMLFormElement.prototype.submit;
  HTMLFormElement.prototype.submit = function () {
    if (isCheckout(this.action)) return checkout();
    this.action = map(this.action);
    return submit0.call(this);
  };

  window.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a || e.defaultPrevented || a.getAttribute("href").charAt(0) === "#") return;
    if (isCheckout(a.href)) { e.preventDefault(); return checkout(); }
    var p = proxied(a.href);
    if (p) { e.preventDefault(); location.href = p; }
    else if (a.origin !== location.origin) { e.preventDefault(); window.open(a.href, "_blank"); }
  });
  window.addEventListener("submit", function (e) {
    if (e.defaultPrevented) return;
    var form = e.target, btn = e.submitter;
    var own = btn && btn.hasAttribute("formaction");
    var action = own ? btn.formAction : form.action;
    if ((btn && btn.name === "checkout") || isCheckout(action)) { e.preventDefault(); return checkout(); }
    var p = proxied(action);
    if (p) own ? (btn.formAction = p) : (form.action = p);
  });
  if (window.navigation) navigation.addEventListener("navigate", function (e) {
    if (!e.cancelable || e.hashChange || e.formData || e.downloadRequest != null) return;
    var u = e.destination.url;
    if (isCheckout(u)) { e.preventDefault(); return checkout(); }
    var p = proxied(u);
    if (p && p !== u) { e.preventDefault(); location.href = p; }
    else if (!p && new URL(u).origin !== location.origin) { e.preventDefault(); window.open(u, "_blank"); }
  });
})`;

const checkoutPage = (host: string) =>
  `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="margin:0;height:100vh;display:grid;place-items:center;font-family:system-ui,sans-serif"><a href="/frame/${host}/${CHECKOUT}" target="_blank" style="padding:16px 28px;border-radius:999px;background:#111;color:#fff;text-decoration:none;font-size:17px">Continue to checkout ↗</a></body>`;

const readCookies = (req: NextRequest) =>
  (req.headers.get("cookie") ?? "")
    .split(/;\s*/)
    .filter((c) => c.startsWith(COOKIE_PREFIX))
    .map((c) => c.slice(COOKIE_PREFIX.length))
    .join("; ");

const handle = async (
  req: NextRequest,
  { params }: { params: Promise<{ host: string; path?: string[] }> },
) => {
  const { host, path = [] } = await params;
  const hosts = storeHosts(host);

  const headers = new Headers();
  for (const k of ["accept", "accept-language", "content-type", "user-agent", "x-requested-with"]) {
    const v = req.headers.get(k);
    if (v) headers.set(k, v);
  }
  const cookie = readCookies(req);
  if (cookie) headers.set("cookie", cookie);

  // Hand the cart to the store's checkout by its token
  if (path[0] === CHECKOUT) {
    const cart = await fetch(`https://${host}/cart.js`, { headers })
      .then((r) => r.json())
      .catch(() => null);
    const target = cart?.item_count && cart.token ? `cart/c/${cart.token}` : "";
    return Response.redirect(`https://${host}/${target}`, 302);
  }

  const upstream = new URL(
    `https://${host}/${path.map(encodeURIComponent).join("/")}${req.nextUrl.search}`,
  );
  if (req.method === "GET" && isCheckoutPath(upstream.pathname)) {
    return new Response(checkoutPage(host), {
      headers: { "content-type": "text/html; charset=utf-8", "content-security-policy": CSP },
    });
  }

  const hasBody = !["GET", "HEAD"].includes(req.method);
  if (hasBody) headers.set("origin", `https://${host}`);

  const res = await fetch(upstream, {
    method: req.method,
    headers,
    body: hasBody ? await req.arrayBuffer() : undefined,
    redirect: "manual",
  });

  const type = res.headers.get("content-type") ?? "";
  const poweredBy = res.headers.get("powered-by") ?? "";
  const isShopify = /shopify/i.test(poweredBy) && !/hydrogen/i.test(poweredBy);
  const blocksFrames =
    res.headers.has("x-frame-options") ||
    /frame-ancestors/i.test(res.headers.get("content-security-policy") ?? "");
  if (!isShopify || (type.includes("text/html") && res.ok && !blocksFrames)) {
    return Response.redirect(upstream.href, 302);
  }

  const out = new Headers({
    "cache-control": "no-store",
    "x-robots-tag": "noindex",
    "content-security-policy": CSP,
  });
  if (type) out.set("content-type", type);

  for (const c of (res.headers as any).getSetCookie() as string[]) {
    const rest = c.replace(/;\s*(domain|path)=[^;]*/gi, "");
    out.append("set-cookie", `${COOKIE_PREFIX}${rest}; Path=/frame/${host}`);
  }

  const location = res.headers.get("location");
  if (location) {
    const to = new URL(location, upstream);
    if (hosts.includes(to.host) && isCheckoutPath(to.pathname)) {
      out.set("content-type", "text/html; charset=utf-8");
      return new Response(checkoutPage(host), { headers: out });
    }
    out.set(
      "location",
      hosts.includes(to.host) ? `/frame/${to.host}${to.pathname}${to.search}` : to.href,
    );
  }

  const dest = req.headers.get("sec-fetch-dest");
  if (type.includes("text/html") && (!dest || dest === "iframe" || dest === "document")) {
    const inject = `<base href="${upstream.href}"><script>${CLIENT}(${JSON.stringify(host)}, ${JSON.stringify(hosts)})</script>`;
    const html = (await res.text()).replace(/<head[^>]*>/i, (m) => m + inject);
    return new Response(html, { status: res.status, headers: out });
  }

  return new Response(res.body, { status: res.status, headers: out });
};

export const GET = handle;
export const POST = handle;
