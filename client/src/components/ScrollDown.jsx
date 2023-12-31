import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import Scroll from '../../images/scroll-down.png'

const ScrollDown = () => {
  return (
    <Link
      to="mission"
      smooth={true}
      duration={1000}
      className='cursor-pointer hover:scale-110 active:scale-90 absolute bottom-8 sm:bottom-4'>
      <motion.img src={Scroll}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        alt='SidebarIcon'
        className='w-5 h-5 md:w-8 md:h-8' />
    </Link>
  )
}

export default ScrollDown