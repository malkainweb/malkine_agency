import Calendy from "../component/calendy";
import Scrolling_hands from "../component/landing_template/scrolling_hand";
import Writing from "../component/landing_template/writing";

const Landing_template = () => {
  return (
    <>
      <Scrolling_hands />
      <Writing />
      <Calendy />
      <div className="h-[100vw]"></div>
    </>
  );
};

export default Landing_template;
