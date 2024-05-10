import Calendy from "../component/calendy";
import Footer from "../component/fotter/footer";
import Footer_hand from "../component/landing_template/footer_hand";
import Processes from "../component/landing_template/process";
import Scrolling_hands from "../component/landing_template/scrolling_hand";
import Writing from "../component/landing_template/writing";

const Landing_template = () => {
  return (
    <>
      <Scrolling_hands />
      <Writing />
      <Calendy />
      <Processes />
      <Footer_hand />
      <Footer landing={true} />
      {/* <div className="h-[100vw]"></div> */}
    </>
  );
};

export default Landing_template;
