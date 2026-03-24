import Landing_nav from "../component/landing_template/landing_nav";
import LandingAbout from "./About";
import BrandCards from "./BrandCards";
import FixedButton from "./fixedbutton";
import LandingPageFooter from "./footer";
import Landing_Services from "./Services";

export default function Home() {
  return (
    <div className="bg-black pb-10">
      <Landing_nav />
      <FixedButton />
      <BrandCards />
      <LandingAbout />
      <Landing_Services />
      <LandingPageFooter />
    </div>
  );
}
