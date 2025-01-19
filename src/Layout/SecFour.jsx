import React from "react";

const SecFour = () => {
  return (
    <section className="relative z-50   ">
      <div className="flex items-center px-7 md:px-0 gap-10 lg:gap-20 flex-col md:flex-row pt-10 ">
        {/* col1  */}
        <div className="relative  md:w-[50%] flex flex-col ">
          <img
            src="../img/Sec4/about_s4_img3 1.png"
            alt=""
            className="z-40 relative md:min-w-[100%]  lg:min-w-[80%] md:ml-10  lg:pt-32 lg:ml-20 "
          />
          <div className="relative ">
            <img
              src="../img/Sec3/about_s4_bubble2 1.png"
              alt=""
              className="absolute bottom-20 -right-16 z-0  hidden lg:block"
            />
           
          </div>
        </div>

        {/* col2 */}
        <div className="md:w-[50%] xl:pr-20 md:pl-10 flex flex-col gap-6 md:gap-3 lg:gap-5 items-start pt-10 ">
          <button className="bg-[#6953D31F] text-[#6953D3] p-2 text-lg rounded-lg">
          Beautiful Themes
          </button>

          {/* h1 */}
          <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl  w-full font-bold leading-tight text-gray-800">
          Focus More With <br />
            <span className="bg-gradient-to-r from-[#7259dd] to-[#f98085] text-transparent bg-clip-text">
            Dark Theme
            </span>
          </h1>
          <h4 className="text-gray-500 text-xl md:text-lg lg:text-xl md:pr-10 lg:pr-20 xl:pr-24 md:pt-2 md:leading-7 leading-8 xl:leading-9">
            Stay focused and productive with a clean clutter-free note space.
            the flexible ways to organize your notes: hashtags , nested
            notebooks , pining notes to the top of the note list, ect.
          </h4>

          <div className="flex flex-col md:gap-3 lg:gap-6">
         <ul className="list-disc text-xl lg:text-2xl text-gray-500 font-semibold">
            <li>Filtering notes using matched keywords</li>
            <li className="text-black">8 Beautiful themes for you select</li>
            <li>Save energy for your device</li>
            <li>Easy to switch between light and dark mode</li>
         </ul>
          </div>

          <button className="bg-[#6953D3] min-w-[185px] min-h-[49px] text-xl lg:text-xl text-white rounded-full">
          Discovery Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecFour;
