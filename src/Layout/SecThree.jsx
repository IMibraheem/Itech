import React from 'react'

const SecThree = () => {
  return (
    <section className="relative z-50 lg:top-10 xl:top-20  overflow-hidden ">
      <div className="flex items-center xl:gap-10  flex-col md:flex-row-reverse ">
        
        {/* col1  */}
        <div className="relative  md:w-[50%]  flex flex-col ">
          <img src="../img/Sec3/2mobiles 1.png" alt="" className="z-40 relative w-[100%]  pt-32 mr-20"  />
          <div className="relative ">
            <img
              src="../img/Sec3/about_s4_bubble2 1.png"
              alt=""
              className="absolute -bottom-2 right-10 z-30 hidden md:block"
            />
           
          </div>
        </div>


        {/* col2 */}
        <div className="md:w-[50%] px-4 md:pl-5 lg:pl-10 xl:pl-20 flex flex-col gap-5 items-start pt-10 ">
          <button className="bg-[#6953D31F] text-[#6953D3] p-2 text-lg rounded-lg">
          Better Note Management
          </button>

          {/* h1 */}
          <h1 className="text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl  w-full font-bold leading-tight text-gray-800">
          Your Notes 
            <span className="bg-gradient-to-r from-[#7259dd] to-[#f98085] text-transparent bg-clip-text ml-3">        
              Creative
            </span>
          </h1>
          <h4 className="text-gray-500 text-xl lg:pr-24  lg:pt-4 leading-8 lg:leading-9">Automatically syncs across all your devices. You can also access and write notes without internet connection.</h4>

          <div className="flex flex-col gap-6 w-[100%]">
            
      <div className='w-full bg-[#e9e5f8] p-5 rounded-xl flex flex-col gap-5'>
        <div className='flex justify-between w-full'>
            <h3 className='text-xl font-semibold text-[#4B2FD2]'>Create And Save Your Notes With Multi-Media</h3>
            <img src="../img/Sec3/arrowup2.png" alt="" className='object-contain'/>
        </div>
        
        <h4 className='text-gray-500 text-xl'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</h4>
      </div>

      <div className='w-full px-5 rounded-xl flex flex-col gap-5'>
        <div className='flex justify-between w-full'>
            <h3 className='text-xl font-semibold '>Web Clipper Extension </h3>
            <img src="../img/Sec3/arrowdown2.png" alt="" className='object-contain'/>
        </div>
    
      </div>

      <div className='w-full  px-5 rounded-xl flex flex-col gap-5'>
        <div className='flex justify-between w-full'>
            <h3 className='text-xl font-semibold '>Protect Your Note With Lock</h3>
            <img src="../img/Sec3/arrowdown2.png" alt="" className='object-contain'/>
            
        </div>
    
      </div>

          </div>
          
          <div className=" flex justify-center  items-center bg-[#E7E5E5] min-w-[250px] min-h-[69px] gap-2 rounded-full">
            <img src="../img/Sec3/Chrome.png" alt="" />
            <div className='border-l px-3 border-black '>
                <p className='text-sm'>Available In The</p>
                <p className='text-sm font-semibold'>Chrome Web Store</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SecThree