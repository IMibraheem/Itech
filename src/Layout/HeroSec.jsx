import React from 'react'

const HeroSec = () => {
  return (
    <section className='relative -top-2 bg-white z-10 w-full flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between pt-3 md:pt-20 px-0 pl-2 sm:px-2 md:px-12 lg:px-20'>
      {/* Col 1 */}
        <div className='flex flex-col gap-5 justify-start items-start '> 
          
          {/* first Button on top */}
          <button className='bg-[#6953D31F] text-[#6953D3] p-2 text-lg rounded-lg'>Notero-Easy Note App</button>

          {/* h1 */}
          <h1 className=' text-4xl   md:text-6xl xl:text-[60px] xl:mt-9 w-full font-semibold xl:leading-snug text-[#333333]'>Note <span className='bg-gradient-to-r from-[#7259dd] to-[#f98085] text-transparent bg-clip-text'> Your Everything </span>
          In One App</h1>
          
          {/* h3 */}
          <h3 className='text-xl text-[#33333399]'>No Coding required to make customization. the live customizer has everything you need.</h3>
          
          {/* row 1 */}
          <div className='flex gap-5  sm:gap-20    justify-center items-center xl:mt-10'>
            <div className='bg-[#6953D3] text-white text-base  sm:text-xl   p-3   rounded-full flex justify-center items-center gap-1 md:gap-3 cursor-pointer xl:w-[241px]'>
              <img src="../img/heroSec/Apple Logo.png" alt=""  className='w-7'/>
              {/* <div className='w-[1px] h-[30px] bg-white'></div> */}
              <h2 className='text-center text-xl'>|  Download App</h2>

            </div>
            <div className='flex gap-5 text-base md:text-xl xl:text-lg w-44 font-medium text-[#333333]'>
              <div  className=' border border-[#6953D3] sm:p-4 p-2 rounded-full bg-transparent  object-cover'>
              <img src="../img/heroSec/Polygon 2.png" alt="polygon image"  />
              </div>
              <h4>View 
              Promotion</h4>
            </div>
          </div>

          {/* row 2 */}
          <div className='flex flex-col sm:flex-row  justify-center items-center gap-5   sm:gap-28 xl:mt-10 text-[#494949] text-sm font-medium'>
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
        <img src="../img/heroSec/Ellipse 10.png" alt="Round Circle" className='absolute top-[100px]'/>
        
        <img src="../img/heroSec/Ellipse 11.png" alt="Round Circle" className='absolute top-0 left-40'/>
        </div>

    </section>
  )
}

export default HeroSec