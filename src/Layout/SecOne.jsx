import React from 'react'

const SecOne = () => {
  return (
    <section className=' w-full relative  bg-[#f9f4f4] -top-20 md:top-0  sm:bg-transparent'>
        <div className='relative z-10 '>
        <img src="../img/Sec1/sec1-bg1.png" alt="" className=' absolute w-full object-cover md:-top-[160px] lg:top-0 xl:-top-40 z-30' />
        <img src="../img/Sec1/sec1-bg2.png" alt="" className='absolute hidden md:block  w-[70%]  object-cover md:-top-[160px] lg:top-0 xl:-top-[170px] z-10 right-0' />
        </div>
        {/* First Row */}
        <div className='relative z-30 font-semibold flex flex-col gap-10 md:gap-20 pt-16 md:pt-0 lg:pt-36 xl:pt-20 '>
            <h1 className='text-center  text-4xl'><span className='text-[#6953d3]'> 25K+ Installation </span>and featured on</h1>
        <div className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center '>
        <img src="../img/Sec1/TECHNEWS.png" alt="" className=' ' />
        <img src="../img/Sec1/hello world.png" alt="" className=' ' />
        <img src="../img/Sec1/IT Blog.png" alt="" className=' ' />
        <img src="../img/Sec1/digitek.png" alt="" className=' ' />
        <img src="../img/Sec1/teckrown.png" alt="" className=' ' />
       </div>
        <div className='w-[90%] h-[1px] bg-black m-auto '></div>
        </div>

        {/*Second Row   */}
        <div className='relative z-30 font-semibold flex flex-col justify-center items-center gap-10 pt-16 sm:bg-[#f9f4f4] overflow-hidden '>

        <button className='bg-[#ffffff] text-[#6953D3] p-2 text-lg rounded-lg'>Notero-Easy Note App</button>
        <h1 className='text-5xl font-bold text-gray-800 text-center'>
        Awesome <span className='bg-gradient-to-r from-[#7259dd] to-[#f98085] text-transparent bg-clip-text'> Features </span>
        </h1>

        {/*  imgs and text  inside second Row */}
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full lg:h-[270px]  lg:pt-20 h-auto relative gap-5'>
            <div className='flex flex-col gap-7 z-40  md:w-32'>
                <img src="../img/Sec1/Ellipse 15.png" alt=""  className=''/>
                <h2 className='font-bold w-40  text-xl'>Notes Powerful
                and Security</h2>
            </div>

            <div className='flex flex-col gap-7 z-40  md:w-32'>
                <img src="../img/Sec1/Ellipse 16.png" alt="" />
                <h2 className='font-bold w-40 text-xl'>Notes Powerful
                and Security</h2>
            </div>
            
            <div className='flex flex-col gap-7 z-40  md:w-32'>
                <img src="../img/Sec1/Ellipse 17.png" alt="" />
                <h2 className='font-bold w-40 text-xl'>Notes Powerful
                and Security</h2>
            </div>
            
            <div className='flex flex-col gap-7 z-40  md:w-32'>
                <img src="../img/Sec1/Ellipse 18.png" alt="" />
                <h2 className='font-bold w-40 text-xl'>Notes Powerful
                and Security</h2>
            </div>
            
            <div className='flex flex-col gap-7 z-40  md:w-32'>
                <img src="../img/Sec1/Ellipse 19.png" alt="" />
                <h2 className='font-bold w-40 text-xl'>Notes Powerful
                and Security</h2>
            </div>
            
            {/* <div className='absolute z-0 bottom-1 '> */}
                <img src="../img/Sec1/Ellipse 13 (Stroke).png" alt="" className='absolute -bottom-24 hidden lg:block ' />
                <img src="../img/Sec1/Ellipse 14 (Stroke).png" alt="" className='absolute -bottom-20 hidden lg:block ' />
            {/* </div> */}
        </div>
        
        </div>


    </section>
  )
}

export default SecOne