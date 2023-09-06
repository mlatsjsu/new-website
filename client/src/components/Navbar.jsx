import React from 'react'
import logo from "../../images/logo.svg";
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className="bg-neutral-100 md:px-16 md:py-4 flex items-center sticky top-0 drop-shadow-md">
      <img className="h-14 mr-auto" src={logo} alt="logo" />
      <div className="flex gap-10">
        <Link
          to=""
          smooth={true}
          duration={1000}
          className='cursor-pointer text-gray-500 hover:text-black'>
          <p>About</p>
        </Link>
        <Link
          to="our-team"
          smooth={true}
          duration={1000}
          className='cursor-pointer text-gray-500 hover:text-black'>
          <p>Our Team</p>
        </Link>
        <Link
          to="get-involved"
          smooth={true}
          duration={1000}
          className='cursor-pointer text-gray-500 hover:text-black'>
          <p>Get Involved</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar