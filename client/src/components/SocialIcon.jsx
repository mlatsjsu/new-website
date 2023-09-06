import React from 'react'
import { motion } from 'framer-motion'

const SocialIcon = ({ link, url, icon }) => {
  return (
    <a
      href={url}
      target='_blank'
      className='cursor-pointer flex gap-2 font-semibold items-center mb-4'>
      <motion.img src={icon}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        alt='Social'
        className='w-5 h-5 md:w-8 md:h-8'
      /> 
      {link}
    </a>
  )
}

export default SocialIcon