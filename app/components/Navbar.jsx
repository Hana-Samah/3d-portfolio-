import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { useRef } from "react";


const Navbar = () => {

    const sideMenuRef = useRef();

    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }


  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
       < Image src={assets.header_bg_color} className='w-full'/>
    </div>
    <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between  py-4   top-0 left-0 l bg-white z-50 shadow-md">

      <a href="#">
      {/*<Image
          src={assets.logo}
          alt="Logo"
          className="cursor-pointer w-28 mr-14"
        />*/}
      </a>

      {/* الروابط */}
      <ul className="hidden md:flex items-center gap-6 lg:gap8 rounded-full px-12 py-3">
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skilles">Skilles</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      {/* زر التواصل */}
      <div className='flex items-center gap-4'>
        <button>
            <Image src={assets.moon_icon} className='w-6'/>
        </button>
        <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4">
          Contact
          <Image
            src={assets.arrow_icon}
            alt="Arrow Icon"
            className="w-3"
          />
        </a>
        <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} className='w-6 cursor-pointer'/>
        </button>
      </div>
      {/* mobile menu */}
      <ul ref={sideMenuRef} className='flex md:hidden flex-col  gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-screen bg-rose-50 transition duration-500'>
        <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} className='w-5 cursor-pointer'/>
        </div>
        
        <li><a onClick={closeMenu} href="#top">Home</a></li>
        <li><a onClick={closeMenu} href="#about">About Me</a></li>
        <li><a onClick={closeMenu} href="#skilles">Skilles</a></li>
        <li><a onClick={closeMenu} href="#project">Project</a></li>
        <li><a onClick={closeMenu} href="#contact">Contact Me</a></li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
