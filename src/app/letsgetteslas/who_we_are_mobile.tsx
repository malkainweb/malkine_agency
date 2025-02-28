import {
  CabinetGrotesk_medium,
  NeueHaasDisplay_medium,
  NeueHaasDisplay_roman,
} from "../utils/fonts";

const Who_we_are = () => {
  const items: any = [
    {
      heading: "9 Years",
      body: "Providing Amazing Services",
      bg: "#EE2020",
    },
    {
      heading: "Over 250+",
      body: "Projects completed ",
      bg: "#0000006c",
    },
    {
      heading: "23",
      body: "Experts on the team ",
      bg: "#EF6C52",
    },
  ];
  return (
    <>
      <div className="w-full  hidden justify-between sm:py-[7vw]  sm:flex flex-col relative   ">
        {/* the other section */}
        <div className=" h-[48vw]  w-full relative sm:overflow-scroll hide_scroll_bar ">
          <div className="absolute top-0 flex px-[2vw] sm:gap-[3vw] h-[42vw] left-0 w-auto ">
            {items.map((e: any, index: any) => {
              return (
                <div
                  key={index}
                  style={{ backgroundColor: e.bg }}
                  className={`flex flex-col px-[4vw] gap-[3vw] ${NeueHaasDisplay_roman.className}  justify-center text-white  w-[65vw]   backdrop-blur-3xl rounded-[3.2vw] h-full`}
                >
                  <h2 className={`text-[10vw]`}>{e.heading}</h2>
                  <h2 className={`text-[5vw] pr-[10vw] leading-[6.5vw]`}>
                    {e.body}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Who_we_are;
