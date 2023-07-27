import Image from "next/image";
import Team from "../component/about/team";
import Footer from "../component/fotter/footer";

export default function About() {
  return (
    <div className="w-full h-auto bg-black">
      <Team />
      <Footer />
    </div>
  );
}
