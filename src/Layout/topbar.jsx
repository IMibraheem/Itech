import React from 'react'

const Topbar = () => {
  return (
    <section className=' max-w-[100vw]'>
        <div className='relative z-0 w-full'>
            <div className='relative h-[70px]  bg-[#4E1C99] '>
                <img src="../img/Ellipse 1.png" alt="" className='absolute top-0 hidden lg:block lg:left-0 xl:left-0 '/>
                <img src="../img/Ellipse 2.png" alt="" className='absolute top-0 hidden  lg:hidden  xl:left-[10vw]'/>
                <img src="../img/Ellipse 3.png" alt="" className='absolute top-10 hidden lg:block lg:left-[20vw] xl:left-[20vw]'/>
                <img src="../img/Ellipse 4.png" alt="" className='absolute top-0 md:right-0 lg:right-[10vw] xl:right-[20vw]'/>
                <img src="../img/Ellipse 5.png" alt="" className='absolute top-0 hidden lg:block lg:right-0 xl:right-0'/>
            </div>
            <div className='flex gap-3 z-10 absolute top-5 text-xl left-16 sm:left-[10%] md:left-[20%] lg:left-[25%] xl:left-[35%]   text-center '>
                <button className='py-1 px-5 bg-white text-base border-none outline-none rounded-lg'>
                    special
                </button>
                😍
                <h3 className='text-gray-300 text-base'>Get <span className='text-white text-lg lg:text-[20px]'> 20% Discount </span> get for new account <span className='text-white text-lg lg:text-[20px] underline'>Register now </span> </h3>
            </div>
            </div>
    </section>
  )
}

export default Topbar

