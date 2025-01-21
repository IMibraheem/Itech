import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="relative ">
        <img
          src="../img/footer/sec1-bg1.png"
          alt=""
          className="absolute w-full  z-20 lg:h-[100vh] xl:h-[92vh] "
        />
        <img
          src="../img/footer/sec1-bg2.png"
          alt=""
          className="absolute w-[65%] right-0"
        />
      </div>
      <div className="relative top-20 md:top-40 z-40 flex flex-col justify-center items-center gap-10 bg-[#f9f4f4]">
        {/* Footer row 1 */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-4xl  xl:text-5xl  w-full font-bold leading-tight text-gray-800 text-center">
            Ready To
            <span className="bg-gradient-to-r from-[#7259dd] to-[#f98085] text-transparent bg-clip-text ml-3">
              Download
            </span>
          </h1>
          <p className="text-gray-800 pt-7 px-3 md:px-14 lg:px-0 text-center lg:text-start">
            Discover your new favorite spaces, from Sao Paulo to Seoul. Download
            from App Store or Google Play.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5  sm:gap-20   justify-center items-center">
          <div className="bg-[#6953D3] text-white text-base  sm:text-lg   p-3 px-5   rounded-full flex justify-center items-center gap-1 md:gap-3 cursor-pointer">
            <img src="../img/heroSec/Apple Logo.png" alt="" className="w-7" />
            {/* <div className='w-[1px] h-[30px] bg-white'></div> */}
            <h2 className="text-center">| Download App on app store</h2>
          </div>

          <div className="bg-transparent text-black border border-black text-base  sm:text-lg   p-3 px-5   rounded-full flex justify-center items-center gap-1 md:gap-3 cursor-pointer">
            <img src="../img/footer/Google Play.png" alt="" className="w-7" />
            {/* <div className='w-[1px] h-[30px] bg-white'></div> */}
            <h2 className="text-center">| Download App on app store</h2>
          </div>
        </div>
{/* footer row 2 */}
        <div className="lg:pt-24 xl:pt-32 flex flex-col justify-center items-center gap-4">

        <div className="flex justify-between items-center w-[90vw] border-b border-black pb-5">
          {/* Footer Logo */}
          <img src="../img/footer/logo.png" alt="footerlogo" className="w-[130px] md:w-auto" />

          {/* FooterNav */}
          <nav className='lg:flex justify-center items-center hidden  xl:ml-16'>
                <ul className='flex justify-center items-center lg:gap-12 xl:gap-16 text-lg font-semibold '>
                    <li className='hover:cursor-pointer text-[#6953D3] flex justify-center items-center gap-2'>Home <img src="../img/downArrow.png" alt="" /></li>
                    <li className='hover:cursor-pointer flex justify-center items-center gap-2'>Pages <img src="../img/downArrow.png" alt="" /></li>
                    <li className='hover:cursor-pointer'>Portfolio</li>
                    <li className='hover:cursor-pointer'>Blog</li>
                    <li className='hover:cursor-pointer'>Contact</li>
                </ul>
            </nav>
            {/* Footer Lang */}
           <div className="flex justify-center items-center gap-3">
            <img src="../img/footer/lang 1.png" alt=""   className="w-[40px] md:w-auto"/>
            <p className="text-sm">English</p>
            <img src="../img/footer/arrowdown2.png" alt="down arrow" />
           </div>

        </div>

        <p className="text-[#00000099] text-center ">2025 copyrights by ITech . All Rights Reserved.</p>
        </div>

        
      </div>
    </section>
  );
};

export default Footer;
