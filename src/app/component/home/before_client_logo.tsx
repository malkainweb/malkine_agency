"use client";

const Before_client_logo = () => {
  return (
    <div className="w-full bg-white py-[30px] p_r">
      <div className="w-full h-[41vw] sm:h-[130vw] rounded-[2.7vw] before_client_logo flex flex-col justify-end py-[3.33vw] px-[2.7vw]">
        <div className=" flex flex-col gap-[1.33vw] sm:gap-[4vw] text-white ">
          <p className="text-[1.07vw] font-medium  sm:hidden">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos{" "}
            <br />
            alias, aperiam pariatur nulla, dignissimos veniam quo repudiandae,{" "}
            <br />
            explicabo provident molestiae dolore culpa temporibus iusto <br />
            quibusdam corporis omnis? Beatae, et ipsa?
          </p>

          {/* mobile textl */}
          <p className="sm:text-[3vw] sm:block hidden">
            Lorem ipsum dolor sit amet <br /> consectetur. Elit purus lectus
            tincidunt <br />
            hendrerit. Cursus cursus ac id id m
          </p>
          <h1 className="nova sm:hidden text-[2.7vw] font-medium">
            We are malkain, we design, we build, we <br />
            create perfection
          </h1>
          <h1 className="nova hidden sm:block  text-[6vw] font-medium">
            We are malkain, we <br /> design, we build, we <br />
            create perfection
          </h1>
          <button className="nova w-fit  text-[1.07vw] font[900]text-white rounded-[39px] px-[3.33vw] py-[1.07vw] bg-[white] text-[#D01717] hover:bg-[#cecdcd] sm:text-[4vw] sm:py-[3vw] sm:px-[6vw]">
            Work with us <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Before_client_logo;
