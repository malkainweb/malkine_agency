import Landing_nav from "../component/landing_template/landing_nav";
import LandingAbout from "./[slug]/About";
import BrandCards from "./[slug]/BrandCards";
import FixedButton from "./[slug]/fixedbutton";
import LandingPageFooter from "./[slug]/footer";
import TakeOff from "./[slug]/TakeOff";
import ServicesScroll from "./[slug]/we_offer";

export default function Home() {
  return (
    <div className="bg-black pb-10">
      <Landing_nav />
      <FixedButton />

      {/* <VideoHero /> */}

      <BrandCards />
      <ServicesScroll />
      <TakeOff />
      {/* <LandingAbout /> */}

      <LandingPageFooter />
    </div>
  );
}
