'use client'

import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion'

const Header = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView='show'
      whileHover='show'
      className='xPaddings fixed py-3 bg-beige-50 top-0 w-full flex justify-end h-[60px] z-10'>
        <ul className='flex justify-between items-center gap-8 md:gap-12 font-[Radley] text-[20px] italic text-cream-20'>
          <motion.li  
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}>
            <a href="#about">About</a>
            </motion.li>
          <motion.li  
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}>
            <a href="#skills">Skills</a>
          </motion.li>
          <motion.li  
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}>
            <a href="#projects">Projects</a>
          </motion.li>
          <motion.li  
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}>
            <a href="#contact">Contact</a>
          </motion.li> 
                        
        </ul>
      </motion.nav>
  )
}

export default Header