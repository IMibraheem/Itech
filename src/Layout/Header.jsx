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
    <section className='relative w-full z-10 bg-white rounded-2xl -top-2 lg:px-10 px-7 xl:px-16 py-4'>
        <header className='flex justify-between items-center'>
            <div className='flex justify-center items-center'>
                <img src="../img/logo.png" alt=""  className='w-[110px] md:w-auto'/>
            </div>
            {/* desktop Nav */}
            <nav className='lg:flex justify-center items-center hidden  xl:ml-16'>
                <ul className='flex justify-center items-center lg:gap-12 xl:gap-16 text-lg font-semibold '>
                    <li className='hover:cursor-pointer text-[#6953D3] flex justify-center items-center gap-2'>Home <img src="../img/downArrow.png" alt="" /></li>
                    <li className='hover:cursor-pointer flex justify-center items-center gap-2'>Pages <img src="../img/downArrow.png" alt="" /></li>
                    <li className='hover:cursor-pointer'>Portfolio</li>
                    <li className='hover:cursor-pointer'>Blog</li>
                    <li className='hover:cursor-pointer'>Contact</li>
                </ul>
            </nav>
           
            <div>
            <i class="fa-solid fa-bars cursor-pointer text-2xl lg:hidden " onClick={handleNav}></i>
            </div>
            <div className='  items-center justify-center gap-3 hidden md:flex'>
                <img src="../img/profile.png" alt="" className='border border-black p-1 rounded-full'/>
                <button className='border border-black p-2 rounded-full text-sm flex justify-center items-center'>Join ITech Hub <img src="../img/arrowright.png" alt="" /></button>
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