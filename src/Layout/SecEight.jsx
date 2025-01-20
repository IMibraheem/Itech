import React from 'react'

const SecEight = () => {
  return (
    <section className='pt-10 pb-28'>
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

          <div className='flex justify-between p-10 items-center min-w-[90%] mt-6 border border-gray-700 rounded-2xl'>
            <div className='flex justify-center items-center'>
                <img src="../img/Sec8/GitHub.png" alt="" />
                <div className='text-gray-800'>
                    <h1 className='text-4xl font-bold '>GitHub</h1>
                    <p>Open Source & Commit Code</p>
                </div>
            </div>

            <div className='flex justify-center items-center gap-4'>
                <img src="../img/Sec8/Twitter.png" alt="" />
                <div className='text-gray-800'>
                    <h1 className='text-4xl font-bold '>Tweeter</h1>
                    <p>Latest News & Update</p>
                </div>
            </div>

            <div className='flex justify-center items-center gap-4'>
                <img src="../img/Sec8/Telegram.png" alt="" />
                <div className='text-gray-800'>
                    <h1 className='text-4xl font-bold '>GitHub</h1>
                    <p>Open Source & Commit Code</p>
                </div>
            </div>
            
          </div>
          </div>
    </section>
  )
}

export default SecEight