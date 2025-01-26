import React from "react";

const SecSeven = () => {
  return (
    <section className="relative z-50  pt-10 md:pt-0">
      <div className="flex items-center gap-52 md:gap-0 xl:gap-10  flex-col md:flex-row-reverse ">
        {/* col1  */}
        <div className="relative  md:w-[50%] h-lvh md:h-auto flex flex-col ">
          <img
            src="../img/Sec7/contact_globe 1.png"
            alt=""
            className="z-0 relative w-[100%]  pt-32 mr-20"
          />
          <div className="absolute lg:top-20 xl:top-44 ">
            <div className="flex flex-col gap-3 md:gap-10">
                
              <div className="flex flex-col md:flex-row justify-center items-center md:w-[100%] lg:w-[90%] xl:w-[80%] p-5 md:p-7 shadow-2xl rounded-2xl bg-white z-40 gap-5">
                <div>
                  <img src="../img/Sec7/user4.png" alt="" className="md:w-40" />
                </div>
                <div className="flex flex-col justify-center items-center md:gap-1 lg:gap-3">
                  <img src="../img/Sec7/star.png" alt="" className="w-32" />
                  <p className="text-black font-semibold text-center">
                    “You can even send emails to Evernote and gatherall of the
                    things you need in a single place.”
                  </p>
                  <p className="text-black text-xs ">
                    JURGEN K. / Senior Marketing At Brator
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center lg:w-[90%] xl:w-[80%] p-5 md:p-7 shadow-2xl rounded-2xl bg-white z-40 gap-5 lg:ml-12 xl:ml-24">
                <div>
                  <img src="../img/Sec7/user5.png" alt="" className="md:w-40" />
                </div>
                <div className="flex flex-col justify-center items-center md:gap-1 lg:gap-3">
                  <img src="../img/Sec7/star.png" alt="" className="w-32" />
                  <p className="text-black font-semibold text-center">
                    “You can even send emails to Evernote and gatherall of the
                    things you need in a single place.”
                  </p>
                  <p className="text-black text-xs ">
                    JURGEN K. / Senior Marketing At Brator
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center lg:w-[90%] xl:w-[80%]  p-5 md:p-7 shadow-2xl rounded-2xl bg-white z-40 md:gap-1 lg:gap-3">
                <div>
                  <img src="../img/Sec7/user6.png" alt="" className=" md:w-40 " />
                </div>
                <div className="flex flex-col gap-3 justify-center items-center ">
                  <img src="../img/Sec7/star.png" alt="" className="w-32" />
                  <p className="text-black font-semibold text-center">
                    “You can even send emails to Evernote and gatherall of the
                    things you need in a single place.”
                  </p>
                  <p className="text-black text-xs ">
                    JURGEN K. / Senior Marketing At Brator
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* col2 */}
        <div className="md:w-[50%] px-4 md:pl-5 lg:pl-10 xl:pl-20 flex flex-col gap-3 md:gap-0 lg:gap-3 xl:gap-5 items-start pt-10 ">
          <button className="bg-[#6953D31F] text-[#6953D3] p-2 text-lg rounded-lg">
            Testimonials
          </button>

          {/* h1 */}
          <h1 className="text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl  w-full font-bold leading-tight text-gray-800">
            Loved From
            <span className="bg-gradient-to-r from-[#7259dd] to-[#f98085] text-transparent bg-clip-text ml-3">
              Customers
            </span>
          </h1>
          <h4 className="text-[#44444499] text-lg lg:text-xl lg:pr-24  lg:pt-4 leading-8 lg:leading-9">
            Notero loved from thoudsands customer worldwide and get trusted from
            big companies.
          </h4>

          <div className="flex flex-col md:flex-row   px-5 items-center gap-5  lg:gap-9 xl:gap-16  w-full p-5 md:pt-7 lg:pt-10">
            <div className="flex flex-col  justify-center items-center gap-3 lg:gap-5 pt-3">
              <img src="../img/Sec7/testi_s4_ic1.png" alt="img" className=" md:w-[55%] lg:w-[67%] xl:w-auto object-cover"/>
              <h1 className="text-[#5038C6] text-3xl lg:text-4xl font-bold">2,5M+</h1>
              <p className="text-xl  lg:text-lg  text-[#444444]">
                Downloaded and <br />
                Installation
              </p>
            </div>

            <div className="w-[1px] h-56 hidden md:block bg-black"></div>

            <div className="flex flex-col justify-center gap-3 md:gap-2 lg:gap-4">
              <img src="../img/Sec7/testi_s4_ic2.png" alt="img" className="md:w-[37%] lg:w-[47%] "/>
              <h1 className="text-[#5038C6] text-3xl lg:text-4xl  font-bold">4.8/5</h1>
              <div className="flex flex-col justify-center items-start">
                <img src="../img/Sec7/star.png" alt="" className="lg:w-28" />
                <p className="text-xl lg:text-lg  text-[#444444]">Based on 1,258 reviews</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-2 lg:gap-5 xl:gap-7 md:pt-8">
            <button className= "w-[90vw]  text-xl md:w-auto lg:w-[280px] xl:w-[310px] h-14 bg-[#6953D3]  md:text-base lg:text-xl font-medium text-white rounded-full">
              See Reviews on app store
            </button>
          
            <div className='flex gap-5 text-base md:text-xl xl:text-lg w-44 font-semibold text-[#333333]'>
              <div  className=' border border-[#6953D3] sm:p-4 p-2 rounded-full bg-transparent  object-cover'>
              <img src="../img/heroSec/Polygon 2.png" alt="polygon image"  />
              </div>
              <h4>View 
              Promotion</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecSeven;
