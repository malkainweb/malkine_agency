import { Suspense } from "react";
import Campaign_Home_wrapper from "./wrapper";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Campaign_Home_wrapper />
    </Suspense>
  );
}
