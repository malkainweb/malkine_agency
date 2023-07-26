import Image from "next/image";
import Hero_services from "../component/services/hero";
import Method from "../component/services/method";
import Footer from "../component/fotter/footer";
import Laptop_on_footer from "../component/services/laptopon_footer";
import Mission from "../component/services/mission";
import Portfolio from "../component/services/portfolio";
import Simple from "../component/services/simple";
import Work_ethics from "../component/services/work_ethics";
import Timeline from "../component/services/timeline";

export default function Home() {
  return (
    <div className="">
      <Hero_services />
      <Method />
      <Timeline />
      <Work_ethics />
      <Simple />
      <Portfolio />
      <Mission />
      <Laptop_on_footer />
      <Footer />
    </div>
  );
}
