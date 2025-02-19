import React from 'react'

const HeroSec = () => {
  return (
    <section className='relative  top-5 sm:top-0 bg-white z-10 w-full flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between pt-3 md:pt-20 px-5 pl-2 sm:px-5 md:px-12 lg:px-7 2xl:px-24'>
      {/* Col 1 */}
        <div className='flex flex-col gap-5 xl:gap-3 2xl:gap-5 justify-start items-start '> 
          
          {/* first Button on top */}
          <button className='bg-[#6953D31F] text-[#6953D3] p-2 text-lg 2xl:text-xl 2xl:max-w-[300px] 2xl:h-[58px] rounded-lg'>Notero-Easy Note App</button>

          {/* h1 */}
          <h1 className='text-3xl sm:text-4xl   md:text-5xl lg:text-5xl xl:text-[60px] min-1536:text-[60px] min-1536:w-[100%] min-1636:w-[90%]  xl:mt-9 w-full font-semibold xl:leading-snug text-[#333333]'>Note <span className='bg-gradient-to-r from-[#7259dd] to-[#f98085] text-transparent bg-clip-text'> Your Everything </span>
          In One App</h1>
          
          {/* h3 */}
          <h3 className='text-xl sm:text-2xl  min-1536:text-2xl  2xl:w-[90%] font-medium text-[#33333399]'>No Coding required to make customization. the live customizer has everything you need.</h3>
          
          {/* row 1 */}
          <div className='flex  flex-col sm:flex-row gap-5  sm:gap-20  lg:gap-10   justify-center items-start sm:items-center lg:pt-8 xl:pt-5 min-1536:mt-3 px-4'>
            <div className='bg-[#6953D3] text-white text-base  sm:text-xl   p-3   rounded-full flex justify-center items-center gap-1 md:gap-3 cursor-pointer w-[241px] 2xl:w-[261px] h-[60px]'>
              <img src="../img/heroSec/Apple Logo.png" alt=""  className='w-7'/>
              {/* <div className='w-[1px] h-[30px] bg-white'></div> */}
              <h2 className='text-center text-xl 2xl:text-2xl'>|  Download App</h2>

            </div>
            <div className='flex justify-start items-center  gap-5 text-base ml-3 sm:ml-0 md:text-xl xl:text-lg 2xl:text-2xl w-44 2xl:w-[245px] font-medium '>
              <div  className=' border border-[#6953D3] sm:p-4 p-2 rounded-full bg-transparent  object-cover'>
              <img src="../img/heroSec/Polygon 2.png" alt="polygon image"  />
              </div>
              <h4 >View 
              Promotion</h4>
            </div>
          </div>

          {/* row 2 */}
          <div className='flex flex-col sm:flex-row  justify-center items-center gap-5 ml-3 sm:ml-0  sm:gap-28 lg:gap-12 lg:pt-5 xl:mt-3 2xl:mt-10 text-[#333333] text-sm font-medium'>
          <div className='flex text-base justify-center items-center font-bold 2xl:text-xl'>
              <img src="../img/heroSec/Ellipse 8.png" alt="polygon image" className=' object-cover p-3'  />
              <h4>Free 14 Days Trial</h4>
            </div>
          <div className='flex text-base justify-center items-center font-bold 2xl:text-xl'>
              <img src="../img/heroSec/Ellipse 9.png" alt="polygon image" className=' object-cover p-3'  />
              <h4>One Time Payment</h4>
            </div>
          </div>


        </div>
        {/* Col 2 */}
        <div className='relative   '>
          <img src="../img/heroSec/header.png" className='object-contain  w-[700px] lg:w-[100vw] min-1050:w-[800px] max-1110:w-[800px] min-1111:w-[700px] max-1279:w-[700px] xl:w-[900px] min-1300:w-[800px] min-1370:w-[750px] min-1441:w-[700px] min-1481:w-[680px]  min-1536:w-[950px] min-1636:w-[850px] min-1736:w-[740px] min-1836:w-[700px]  2xl:mr-10 relative top-0 lg:top-10 xl:top-0 ml-auto lg:ml-0' alt="HeroSection img" />
        <img src="../img/heroSec/Ellipse 10.png" alt="Round Circle" className='absolute top-[100px]'/>
        
        <img src="../img/heroSec/Ellipse 11.png" alt="Round Circle" className='absolute hidden md:block top-0 left-40'/>
        <img src="../img/heroSec/Ellipse 11.png" alt="Round Circle" className='absolute hidden md:block top-[60%] left-28 lg:left-20'/>
        </div>

    </section>
  )
}

export default HeroSec




// <section className='relative  top-5 sm:top-0 bg-white z-10 w-full flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between pt-3 md:pt-20 px-5 pl-2 sm:px-5 md:px-12 lg:px-7 2xl:px-24'>
// {/* Col 1 */}
//   <div className='flex flex-col gap-5 xl:gap-3 2xl:gap-5 justify-start items-start '> 
    
//     {/* first Button on top */}
//     <button className='bg-[#6953D31F] text-[#6953D3] p-2 text-lg 2xl:text-2xl 2xl:max-w-[300px] 2xl:h-[58px] rounded-lg'>Notero-Easy Note App</button>

//     {/* h1 */}
//     <h1 className='text-3xl sm:text-4xl   md:text-5xl lg:text-5xl xl:text-[60px] 2xl:text-[70px] 2xl:w-[80%]  xl:mt-9 w-full font-semibold xl:leading-snug text-[#333333]'>Note <span className='bg-gradient-to-r from-[#7259dd] to-[#f98085] text-transparent bg-clip-text'> Your Everything </span>
//     In One App</h1>
    
//     {/* h3 */}
//     <h3 className='text-xl sm:text-2xl  2xl:text-3xl  2xl:w-[90%] font-medium text-[#33333399]'>No Coding required to make customization. the live customizer has everything you need.</h3>
    
//     {/* row 1 */}
//     <div className='flex  flex-col sm:flex-row gap-5  sm:gap-20  lg:gap-10   justify-center items-start sm:items-center lg:pt-8 xl:pt-5 2xl:mt-8 px-4'>
//       <div className='bg-[#6953D3] text-white text-base  sm:text-xl   p-3   rounded-full flex justify-center items-center gap-1 md:gap-3 cursor-pointer w-[241px] 2xl:w-[261px] h-[60px]'>
//         <img src="../img/heroSec/Apple Logo.png" alt=""  className='w-7'/>
//         {/* <div className='w-[1px] h-[30px] bg-white'></div> */}
//         <h2 className='text-center text-xl 2xl:text-2xl'>|  Download App</h2>

//       </div>
//       <div className='flex justify-start items-center  gap-5 text-base ml-3 sm:ml-0 md:text-xl xl:text-lg 2xl:text-2xl w-44 2xl:w-[245px] font-medium '>
//         <div  className=' border border-[#6953D3] sm:p-4 p-2 rounded-full bg-transparent  object-cover'>
//         <img src="../img/heroSec/Polygon 2.png" alt="polygon image"  />
//         </div>
//         <h4 >View 
//         Promotion</h4>
//       </div>
//     </div>

//     {/* row 2 */}
//     <div className='flex flex-col sm:flex-row  justify-center items-center gap-5 ml-3 sm:ml-0  sm:gap-28 lg:gap-12 lg:pt-5 xl:mt-3 2xl:mt-10 text-[#333333] text-sm font-medium'>
//     <div className='flex text-base justify-center items-center font-bold 2xl:text-xl'>
//         <img src="../img/heroSec/Ellipse 8.png" alt="polygon image" className=' object-cover p-3'  />
//         <h4>Free 14 Days Trial</h4>
//       </div>
//     <div className='flex text-base justify-center items-center font-bold 2xl:text-xl'>
//         <img src="../img/heroSec/Ellipse 9.png" alt="polygon image" className=' object-cover p-3'  />
//         <h4>One Time Payment</h4>
//       </div>
//     </div>


//   </div>
//   {/* Col 2 */}
//   <div className='relative   '>
//     <img src="../img/heroSec/header.png" className='object-contain  w-[700px] lg:w-[100vw] min-1050:w-[800px] max-1110:w-[800px] min-1111:w-[700px] max-1279:w-[700px] xl:w-[900px] min-1300:w-[800px] min-1370:w-[750px] min-1441:w-[700px] min-1481:w-[680px]  2xl:w-[950px]    2xl:mr-10 relative top-0 lg:top-10 xl:top-0 ml-auto lg:ml-0' alt="HeroSection img" />
//   <img src="../img/heroSec/Ellipse 10.png" alt="Round Circle" className='absolute top-[100px]'/>
  
//   <img src="../img/heroSec/Ellipse 11.png" alt="Round Circle" className='absolute hidden md:block top-0 left-40'/>
//   <img src="../img/heroSec/Ellipse 11.png" alt="Round Circle" className='absolute hidden md:block top-[60%] left-28 lg:left-20'/>
//   </div>

// </section>