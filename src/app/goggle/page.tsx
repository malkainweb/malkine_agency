"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function About() {
  const router = useRouter();
  useEffect(() => {
    router.push("/goggle/landing");
  }, []);

  return <p>Redirecting ...</p>;
}
