// Route a project link through /frame
export const framed = (link: string) => {
  const url = new URL(link);
  return `/frame/${url.host}${url.pathname}${url.search}${url.hash}`;
};
