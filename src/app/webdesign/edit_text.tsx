"use client";

const Edit_text = ({
  setedit_text,
  id,
  text,
  setrecord_id,
  setrecord_Name,
  record,
}: any) => {
  return (
    <>
      <div className="w-full  absolute   flex-col top-0 left-0 h-full flex justify-center items-end p-[0.5vw] md:gap-[1.5vw] capitalize bg-black bg-opacity-[30%] z-[60] text-[1vw] leading-normal font-normal sm:p-[5vw] sm:text-[3.5vw] gap-[5vw]">
        <button
          className=" w-[8vw]  sm:h-[10vw] sm:w-[30vw] h-[2.3vw] capitalize bg-white text-black  hover:bg-opacity-[60%] backdrop-blur-2xl text-center "
          onClick={() => {
            // setedit_ID(id);
            setrecord_Name(record);
            setedit_text(text);
            setrecord_id(id);
          }}
        >
          edit
        </button>
      </div>
    </>
  );
};

export default Edit_text;
