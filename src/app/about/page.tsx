import Image from "next/image";
import Team from "../component/about/team";
import Footer from "../component/fotter/footer";
import About_hero from "../component/about/about_hero";
import Header_black from "../component/navigation/header_black_nav";

export default function About() {
  return (
    <div className="w-full h-auto bg-black">
      <Header_black />
      <About_hero />
      <Team />
      <Footer />
    </div>
  );
}
