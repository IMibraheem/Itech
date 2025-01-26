import React from 'react'

const Topbar = () => {
  return (
    <section className=' max-w-[100vw] 2xl:h-[76px] overflow-hidden'>
        <div className='relative z-0 w-full'>
            <div className='relative h-[70px]  bg-[#4E1C99] '>
                <img src="../img/Ellipse 1.png" alt="" className='absolute top-0 hidden lg:block lg:left-0 xl:left-0 '/>
                <img src="../img/Ellipse 2.png" alt="" className='absolute top-0 hidden  xl:block  xl:left-[10vw]'/>
                <img src="../img/Ellipse 3.png" alt="" className='absolute top-10 hidden xl:block lg:left-[20vw] xl:left-[20vw] '/>
                <img src="../img/Ellipse 4.png" alt="" className='absolute top-0 md:right-0 lg:right-[10vw] xl:right-[20vw] 2xl:right-[17vw] 2xl:w-[60%]'/>
               
                <img src="../img/Ellipse 5.png" alt="" className='absolute top-0 hidden lg:block lg:right-0 xl:right-0  2xl:w-[12%]'/>
            </div>
            <div className='flex gap-3 z-10 absolute top-2 px-1 sm:top-5 text-xl left-0 sm:left-[10%] md:left-[20%] lg:left-[25%] xl:left-[35%]   text-center '>
                <button className='py-1 px-5 bg-white text-base 2xl:text-lg border-none outline-none rounded-lg hidden sm:block'>
                    special
                </button>
                
                <h3 className='text-gray-300 text-base 2xl:text-xl'>😍 Get <span className='text-white text-lg  sm:text-[20px]'> 20% Discount </span> get for new account <span className='text-white text-lg sm:text-[20px] underline'>Register now </span> </h3>
            </div>
            </div>
    </section>
  )
}

export default Topbar

