import React from 'react'

const HeroSec = () => {
  return (
    <section className='relative -top-2 bg-white z-10 w-full flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between pt-3 md:pt-20 px-0 pl-2 sm:px-2 md:px-12 lg:px-20'>
      {/* Col 1 */}
        <div className='flex flex-col gap-5 justify-start items-start '> 
          
          {/* first Button on top */}
          <button className='bg-[#6953D31F] text-[#6953D3] p-2 text-lg rounded-lg'>Notero-Easy Note App</button>

          {/* h1 */}
          <h1 className=' text-4xl   md:text-6xl xl:text-7xl w-full font-semibold leading-tight text-gray-800'>Note <span className='bg-gradient-to-r from-[#7259dd] to-[#f98085] text-transparent bg-clip-text'> Your Everything </span>
          In One App</h1>
          
          {/* h3 */}
          <h3 className='text-2xl text-[#33333399]'>No Coding required to make customization. the live customizer has everything you need.</h3>
          
          {/* row 1 */}
          <div className='flex gap-5  sm:gap-20   justify-center items-center'>
            <div className='bg-[#6953D3] text-white text-base  sm:text-xl  xl:text-2xl p-3   rounded-full flex justify-center items-center gap-1 md:gap-3 cursor-pointer'>
              <img src="../img/heroSec/Apple Logo.png" alt=""  className='w-8'/>
              {/* <div className='w-[1px] h-[30px] bg-white'></div> */}
              <h2 className='text-center'>|  Download App</h2>

            </div>
            <div className='flex gap-5 text-base md:text-xl w-44 font-semibold '>
              <img src="../img/heroSec/Polygon 2.png" alt="polygon image" className=' border border-[#6953D3] sm:p-4 p-2 rounded-full bg-transparent w-14 object-cover'  />
              <h4>View 
              Promotion</h4>
            </div>
          </div>

          {/* row 2 */}
          <div className='flex flex-col sm:flex-row  justify-center items-center gap-5   sm:gap-28'>
          <div className='flex text-base justify-center items-center font-bold '>
              <img src="../img/heroSec/Ellipse 8.png" alt="polygon image" className=' object-cover p-3'  />
              <h4>Free 14 Days Trial</h4>
            </div>
          <div className='flex text-base justify-center items-center font-bold '>
              <img src="../img/heroSec/Ellipse 9.png" alt="polygon image" className=' object-cover p-3'  />
              <h4>One Time Payment</h4>
            </div>
          </div>


        </div>
        {/* Col 2 */}
        <div className='relative '>
          <img src="../img/heroSec/header.png" className='object-contain w-[1000px] ' alt="HeroSection img" />
        <img src="../img/heroSec/Ellipse 10.png" alt="Round Circle" className='absolute top-20'/>
        </div>

    </section>
  )
}

export default HeroSec