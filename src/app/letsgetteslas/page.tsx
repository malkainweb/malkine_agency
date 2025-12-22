import { Suspense } from "react";
import Home_wrapper from "./home_wrapper";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home_wrapper />
    </Suspense>
  );
}
