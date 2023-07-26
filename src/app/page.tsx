import Image from "next/image";
import Method from "./component/services/method";
import Hero_services from "./component/services/hero";
import Timeline from "./component/services/timeline";
import Simple from "./component/services/simple";
import Laptop_on_footer from "./component/services/laptopon_footer";
import Work_ethics from "./component/services/work_ethics";
import Footer from "./component/fotter/footer";
import Portfolio from "./component/services/portfolio";

export default function Home() {
  return (
    <div className="">
      <Hero_services />
      <Method />
      <Timeline />
      <Work_ethics />
      <Simple />
      <Portfolio />
      <Laptop_on_footer />
      <Footer />
    </div>
  );
}
