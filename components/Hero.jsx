'use client'
import Typewriter from 'typewriter-effect';
import {motion} from 'framer-motion'
import { staggerContainer,fadeIn } from '@/utils/motion';

const Hero = () => {
  return (
    <section className='bg-beige-10 paddings h-screen flex justify-center flex-col'>
      <motion.div className='flex justify-center items-center flex-col mt-16'
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={ {once:true, amount:0.25 } }>
          <h1 className='font-[Ubuntu] text-[40px] md:text-[64px] lg:text-[92px] text-beige-50 font-bold select-none'>
              <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('Hello, I am Amy!')
                  .start();
      }}/></h1>
      <motion.p 
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className='text-teal-50 font-[Alegreya] text-[22px] md:text-[28px] mt-4 select-none text-center'>
        A web developer based in Vancouver. 
      </motion.p>
      <motion.div 
            variants={fadeIn('up', 'tween', 1, 1)} 
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}} 
            className='font-[Radley] text-beige-50 italic select-none flex flex-col justify-center items-center gap-2 mt-48'>
          <a href='#about' className='cursor-pointer text-[18px]'>Find out more</a>
          <a href='#about'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
            </a>
          </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero