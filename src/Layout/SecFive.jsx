import React from 'react'

const SecFive = () => {
  return (
    <section className='relative h-[70vh] md:h-[72vh] lg:h-[90vh] xl:h-lvh'>
        {/* Row One */}
        <div className='flex flex-col justify-center items-center pt-20 gap-5'>
            <button className='w-48 h-12 text-[#6853d3] bg-[#6953D326] rounded-lg text-lg font-semibold'>One Time Payment</button>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl  w-full font-bold leading-tight text-gray-800 text-center">
            Integration With 

            <span className="bg-gradient-to-r from-[#7259dd] to-[#f98085] text-transparent bg-clip-text ml-3">
            Popular Apps
            </span>
            
          </h1>

          <p className='text-[#00000099] text-center  lg:text-xl pb-4'>Notero integrate with popular apps. Help you easy to connect and collaboration</p>
        </div>

        {/* Row twp */}
        <div className=' relative xl:-top-14 '>
            <img src="../img/Sec5/header_4_bubble 1.png" alt="section 5 buble img" className='w-full absolute object-cover -top-20 hidden sm:block'/>
            {/* <div className='relative'> */}
                <img src="../img/Sec5/intg1.png" alt="Sec5 - img1" className='absolute top-0 md:top-3 lg:top-10 xl:top-32 left-[7%] w-[15%] md:w-[12%] lg:w-[10%] xl:w-auto' />
                <img src="../img/Sec5/intg5.png" alt="Sec5 - img1" className='absolute top-16 md:top-20 lg:top-32 xl:top-60 left-[20%] w-[15%] md:w-[12%] lg:w-[10%] xl:w-auto ' />
                <img src="../img/Sec5/intg4.png" alt="Sec5 - img1" className='absolute top-0 md:top-3 lg:top-10 xl:top-32 left-[40%] w-[15%] md:w-[12%] lg:w-[10%] xl:w-auto ' />
                <img src="../img/Sec5/intg3.png" alt="Sec5 - img1" className='absolute top-16 md:top-20 lg:top-32 xl:top-60 right-[30%] w-[15%] md:w-[12%] lg:w-[10%] xl:w-auto ' />
                <img src="../img/Sec5/intg2.png" alt="Sec5 - img1" className='absolute top-0 md:top-3 lg:top-10 xl:top-32 right-[7%] w-[15%] md:w-[12%] lg:w-[10%] xl:w-auto ' />
            {/* </div> */}
        </div>
    </section>
  )
}

export default SecFive