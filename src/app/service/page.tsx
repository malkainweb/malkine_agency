import Landing_nav from "../component/landing_template/landing_nav";
import Service_hero from "./hero";
import New_scroll_hand from "./scroll_hand";

export default async function Home() {
  return (
    <>
      {" "}
      <Landing_nav />
      <div className="h-[6vw] sm:h-[25vw] "></div>
      <Service_hero />
      <New_scroll_hand />
    </>
  );
}
