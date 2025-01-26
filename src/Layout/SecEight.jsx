import React from 'react'

const SecEight = () => {
  return (
    <section className='pt-20 md:pt-[20%] lg:pt-32 xL:pt-10 pb-28'>
        <div className='flex flex-col justify-center items-center gap-5'>
            <button className="bg-[#6953D31F] text-[#6953D3] p-3 px-5 text-lg rounded-lg">
            Notero Community
          </button>

          {/* h1 */}
          <h1 className="text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl  w-full font-bold leading-tight text-gray-800 text-center">
          Join Into 
            <span className="bg-gradient-to-r from-[#7259dd] to-[#f98085] text-transparent bg-clip-text ml-3">
            Our Hub
            </span>
          </h1>

          <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-0 p-10 items-center w-[90%] lg:min-w-[95%] xl:min-w-[80%] mt-6 border  border-gray-700 rounded-2xl'>

            <div className='flex flex-col md:flex-row justify-center items-center '>
                <img src="../img/Sec8/GitHub.png" alt="" className='w-20'/>
                <div className='text-gray-800  flex flex-col'>
                    <h1 className='text-2xl lg:text-3xl xl:text-4xl font-bold  text-center md:text-start'>GitHub</h1>
                    <p>Open Source & Commit Code</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <img src="../img/Sec8/Twitter.png" alt=""  className='w-16'/>
                <div className='text-gray-800'>
                    <h1 className='text-2xl lg:text-3xl xl:text-4xl font-bold text-center md:text-start'>Tweeter</h1>
                    <p>Latest News & Update</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <img src="../img/Sec8/Telegram.png" alt="" className='w-16'/>
                <div className='text-gray-800'>
                    <h1 className='text-2xl lg:text-3xl xl:text-4xl font-bold text-center md:text-start'>GitHub</h1>
                    <p>Open Source & Commit Code</p>
                </div>
            </div>
            
          </div>
          </div>
    </section>
  )
}

export default SecEight