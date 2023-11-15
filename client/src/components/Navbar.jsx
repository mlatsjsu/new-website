import React from 'react'
import logo from "../../images/logo.svg";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react';
import { Button } from 'react-scroll';
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    }
  
  return (
    <>
      {/* <nav className="bg-neutral-100 md:px-16 md:py-3 flex items-center justify-center sticky w-screen top-0 left-0 right-0 drop-shadow-md">
        <img className="h-14 mr-auto" src={logo} alt="logo" />
        <div className="flex gap-10">
          <Link
            to="/about"
            smooth={true}
            duration={1000}
            className='cursor-pointer text-gray-500 font-semibold hover:text-[#ec6c04] text-2xl '>
            <p>About</p>
          </Link>
          <Link
            to="our-team"
            smooth={true}
            duration={1000}
            className='cursor-pointer text-gray-500 font-semibold hover:text-[#ec6c04] text-2xl'>
            <p>Our Team</p>
          </Link>
          <Link
            to="get-involved"
            smooth={true}
            duration={1000}
            className='cursor-pointer text-gray-500 font-semibold hover:text-[#ec6c04] text-2xl'>
            <p>Get Involved</p>
          </Link>
        </div>
      </nav> */}
      <div className='flex justify-between items-center h-24 w-screen mx-auto px-4 text-black'>
      <img className=" h-14 mr-auto" src={logo} alt="logo" />
        <ul className='hidden md:flex '>
          
          <a href='/about' className='p-4 cursor-pointer text-gray-500 font-semibold hover:text-[#EC6C04] text-xl'>
              About
          </a>
          <a href='/team' className='p-4 cursor-pointer text-gray-500 font-semibold hover:text-[#EC6C04] text-xl'>
            Our Team
          </a>
          <a href='/getinvolved' className='p-4 cursor-pointer text-gray-500 font-semibold hover:text-[#EC6C04] text-xl'>
            Get Involved
          </a>
          
        </ul>
        <div onClick = {handleNav} className='hidden sm:flex'>
          {!nav ? <AiOutlineMenu size = {20} />   : <AiOutlineClose size = {20} />}
          
        </div>
        <div className= {nav ? 'fixed left-0 top-0 w-80 h-full border-r-100 border-r-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <ul className=' flex flex-col pt-24  p-4 bg-gray-100 w-80 h-screen '>
            <a href='/about' className='p-4 cursor-pointer text-gray-500 font-semibold hover:text-[#EC6C04] text-xl border-gray'>
                About
            </a>
            <a href='/team' className='p-4 cursor-pointer text-gray-500 font-semibold hover:text-[#EC6C04] text-xl border-gray'>
              Our Team
            </a>
            <a href='getinvolved' className='p-4 cursor-pointer text-gray-500 font-semibold hover:text-[#EC6C04] text-xl border-gray'>
              Get Involved
            </a>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar 

