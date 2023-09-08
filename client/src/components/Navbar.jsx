import React from 'react'
import logo from "../../images/logo.svg";
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className="bg-neutral-100 md:px-16 md:py-3 flex items-center justify-center fixed top-0 left-0 right-0 drop-shadow-md">
      <img className="h-14" src={logo} alt="logo" />
      {/* <div className="flex gap-10">
        <Link
          to=""
          smooth={true}
          duration={1000}
          className='cursor-pointer text-gray-500 font-semibold hover:text-[#ec6c04]'>
          <p>About</p>
        </Link>
        <Link
          to="our-team"
          smooth={true}
          duration={1000}
          className='cursor-pointer text-gray-500 font-semibold hover:text-[#ec6c04]'>
          <p>Our Team</p>
        </Link>
        <Link
          to="get-involved"
          smooth={true}
          duration={1000}
          className='cursor-pointer text-gray-500 font-semibold hover:text-[#ec6c04]'>
          <p>Get Involved</p>
        </Link>
      </div> */}
    </nav>
  )
}

export default Navbar