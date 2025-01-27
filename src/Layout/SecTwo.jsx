import React from "react";

const SecTwo = () => {
  return (
    <section className="relative z-50 lg:-top-10 xl:top-0 ">
      <div className="flex items-center px-7 md:px-0 sm:gap-0 md:gap-10 flex-col md:flex-row ">
        
        {/* col1  */}
        <div className="relative   md:w-[50%] flex flex-col ">
          <img src="../img/Sec2/2 (1).png" alt="" className="z-40 relative md:min-w-[100%]  lg:min-w-[90%] md:ml-10  lg:pt-2 xl:pt-32 lg:ml-0 xl:ml-20 "  />
          <div className="relative ">
            {/* <img
              src="../img/Sec2/about_s4_bubble 1.jpg"
              alt=""
              className="absolute -bottom-20 -right-10 z-0  hidden lg:block"
            /> */}
            <img
              src="../img/Sec2/about_s4_lines 1.png"
              alt=""
              className="absolute lg:-bottom-40 xl:-bottom-10 z-0 hidden lg:block"
            />
          </div>
        </div>


        {/* col2 */}
        <div className="md:w-[50%]  xl:pr-20 md:pl-10 flex flex-col gap-6 md:gap-3 lg:gap-4 2xl:gap-5  items-start pt-10 sm:pt-0   md:pt-10 lg:pt-0 ">
          <button className="bg-[#6953D31F] text-[#6953D3] p-2 text-lg 2xl:text-xl rounded-lg font-medium 2xl">
            Notero-Easy Note App
          </button>

          {/* h1 */}
          <h1 className="text-4xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl   w-full font-bold leading-tight text-gray-800">
            The Note For <br />
            <span className="bg-gradient-to-r from-[#7259dd] to-[#f98085] text-transparent bg-clip-text">        
              Creative
            </span>
          </h1>
          <h4 className="text-gray-500 sm:text-xl md:text-base  lg:text-lg xl:text-xl  md:pr-5 lg:pr-20 xl:pr-24 md:pt-0  xl:pt-4 md:leading-[30px]  lg:leading-7 xl:leading-9">Stay focused and productive with a clean clutter-free note space. the flexible ways to organize your notes: hashtags , nested notebooks , pining notes to the top of the note list, ect.</h4>

          <div className="flex flex-col sm:gap-5 md:gap-3 lg:gap-6">
            
          <div className="flex gap-5 justify-start items-center">
            <img src="../img/Sec2/ticket.png" alt="" className="max-w-[52px] lg:max-w-[10%] xl:max-w-[52px] p-3 lg:p-2 xl:p-3  bg-[#F0EEFB] rounded-full"/>
            <h5 className="text-lg md:text-sm lg:text-[17px] text-[#1E1E1E] font-semibold md:font-bold">Filtering notes using matched keywords</h5>
          </div>

          
          <div className="flex gap-5 justify-start items-center">
            <img src="../img/Sec2/refresh.png" alt="" className="max-w-[52px] lg:max-w-[10%] xl:max-w-[52px] p-3 lg:p-2 xl:p-3  bg-[#F0EEFB] rounded-full"/>
            <h5 className="text-lg md:text-sm lg:text-[17px]  text-[#1E1E1E] font-semibold md:font-bold">Automatically sync in real time</h5>
          </div>

          
          <div className="flex gap-5 justify-start items-center">
            <img src="../img/Sec2/receive.png" alt="" className=" max-w-[52px] lg:max-w-[10%] xl:max-w-[52px] p-3 lg:p-2 xl:p-3 bg-[#F0EEFB] rounded-full"/>
            <h5 className="text-lg md:text-sm lg:text-[17px] text-[#1E1E1E] font-semibold md:font-bold">Complete note editor with rich text options</h5>
          </div>

          </div>
          
          <button className="bg-[#6953D3] min-w-[185px] min-h-[49px] text-xl lg:text-xl mt-3 text-white rounded-full">Free Register</button>

          
        </div>

      </div>
    </section>
  );
};

export default SecTwo;
