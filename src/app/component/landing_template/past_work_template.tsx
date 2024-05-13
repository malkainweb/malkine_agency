"use client";

const Past_work_template = () => {
  const info_array = ["", "", "", "", "", ""];
  return (
    <>
      <div className="w-full flex flex-col  pb-[5vw] sm:pb-[15vw] pt-[7vw] gap-[4vw] ">
        {" "}
        <h3 className="font_helvetica leading-[4.5vw] text-white text-[4vw] font-bold sm:text-[6vw] sm:leading-[7vw]  text-center">
          We Don{"'"}t Just Talk The Talk <br /> We Walk The Walk{" "}
        </h3>
        <div className="w-full flex px-[5vw] sm:gap-[5vw] sm:px-[3vw] justify-center gap-[3vw] flex-wrap ">
          {info_array.map((e: any, index: any) => {
            return (
              <div
                key={index}
                className="w-[40%] border2 sm:w-full  flex flex-col "
              >
                <div className="w-full h-[20vw] sm:h-[50vw] sm:rounded-[4.5vw] border2 rounded-[2.1vw]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Past_work_template;
