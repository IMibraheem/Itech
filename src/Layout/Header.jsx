import React, { useState } from 'react'
const Header = () => {
    const [mobileNav , setmobileNav]=useState(false)
    const handleNav=()=>{
        if(!mobileNav){
            setmobileNav(true)
        }
        else{
            setmobileNav(false)
        }
        console.log(mobileNav);
        
    }
  return (
    <section className='relative w-full z-40 bg-white py-4 rounded-2xl -top-2 lg:px-10 px-7 xl:px-10 2xl:px-20  2xl:py-7'>
         <img src="../img/Polygon 1.png" alt="" className='w-8 absolute -top-2 right-[16vw] sm:right-[9vw] md:left-[48%] lg:left-[27vw] xl:left-[35vw] 2xl:left-[36vw]'/>
        <header className='flex justify-between items-center gap-5'>
            <div className='flex justify-center items-center '>
                <img src="../img/logo.png" alt=""  className='w-[110px] 2xl:w-[180px] md:w-auto '/>
            </div>
            {/* desktop Nav */}
            <nav className='lg:flex justify-center items-center hidden  xl:ml-20'>
                <ul className='flex justify-center items-center lg:gap-12 xl:gap-14  text-lg  2xl:text-2xl font-semibold '>
                    <li className='hover:cursor-pointer text-[#6953D3] flex justify-center items-center gap-2'>Home <img src="../img/arrowdown2.png" alt="" className=''/></li>
                    <li className='hover:cursor-pointer flex justify-center items-center gap-2 text-[#444444] relative'>Pages <img src="../img/downArrow.png" alt="" />
                    <div className='absolute -top-3 right-0 bg-[#FD000033] text-[#BC0000] w-[23px] h-[17px] text-[8px] 2xl:text-[10px] 2xl:w-[30px] flex justify-center items-center'>Hot</div>
                    </li>
                    <li className='hover:cursor-pointer text-[#444444]'>Portfolio</li>
                    <li className='hover:cursor-pointer text-[#444444]'>Blog</li>
                    <li className='hover:cursor-pointer text-[#444444]'>Contact</li>
                </ul>
            </nav>
            <div className='flex justify-end w-[50%] sm:w-[70%] md:justify-center md:w-0  items-center lg:hidden   sm:m-0'>
            <i className="fa-solid fa-bars cursor-pointer text-2xl " onClick={handleNav}></i>
            </div>
           <div>
            <div className='  items-center justify-center gap-3 hidden md:flex '>
                <img src="../img/profile.png" alt="" className='border border-black p-1 rounded-full 2xl:w-10'/>
                <button className='border border-black p-2  rounded-full text-xs flex justify-center items-center gap-2 2xl:text-base'>Join ITech Hub <img src="../img/arrowright.png" alt="" /></button>
            </div>
            </div>
        </header>
            {/* Mobile Nav */}
            <nav className={`${mobileNav ? "flex" :'hidden'} w-full flex lg:hidden  justify-center items-center `}>
                <ul className='flex flex-col justify-center items-center lg:gap-12 text-2xl w-full  font-semibold gap-3 '>
                    <li className='hover:cursor-pointer text-[#6953D3] flex justify-center items-center gap-2  hover:bg-gray-300 w-full text-center'>Home <img src="../img/downArrow.png" alt="" /></li>
                    <li className='hover:cursor-pointer flex justify-center items-center gap-2  hover:bg-gray-300 w-full text-center'>Pages <img src="../img/downArrow.png" alt="" /></li>
                    <li className='hover:cursor-pointer hover:bg-gray-300 w-full text-center'>Portfolio</li>
                    <li className='hover:cursor-pointer hover:bg-gray-300 w-full text-center'>Blog</li>
                    <li className='hover:cursor-pointer hover:bg-gray-300 w-full text-center'>Contact</li>
                </ul>
            </nav>

    </section>
  )
}

export default Header