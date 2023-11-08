'use client'
import { motion } from "framer-motion"
import { staggerContainer, fadeIn, slideIn } from "@/utils/motion"
import Image from "next/image"

const About = () => {
  return (
    <section id='about' className='2xl:h-screen bg-beige-30 paddings h-full overflow-hidden'>
      <motion.div
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={ {once: true,amount:0.25 } }
         className="flex 2xl:flex-row flex-col"
        >
          <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={ {once: true,amount:0.25 } }
              className="flex flex-1 flex-col justify-start md:px-14 xl:px-20 mt-10">
            <motion.h1 
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className='text-cream-30 font-[Radley] italic text-4xl md:text-5xl lg:text-7xl mt-12'>ABOUT AMY</motion.h1>

          <motion.p 
            variants={slideIn('left', 'tween', 0.5, 1)}
            className="font-[Ubuntu] mt-6 md:mt-8 lg:mt-12 text-grey-50 text-sm md:text-lg xl:text-[22px] xl:leading-10">
            I am a passionate web developer based in Vancouver. I specialize in creating remarkable digital experiences using a carefully honed skill set that includes React, Next.js, Tailwind CSS, Framer Motion and MongoDB.
            <br/>
            <br/>
            My primary goal is to transform your ideas into visually appealing and functionally efficient websites. I thrive on the art of making web pages come to life, ensuring they are not only responsive and stylish but also highly user-friendly and improved SEO. 
            <br/>
            <br/>
            My work is driven by a commitment to showcasing the most vital information effectively, ensuring that your online presence captivates and communicates with your audience. This commitment extends to implementing SEO best practices that enhance your website's visibility and reach, helping you connect with the right people.
          </motion.p>
          </motion.div>
          <motion.div
            className="flex justify-end px-24 md:px-48 xl:px-10 self-center mt-20"
            variants={slideIn('right', 'tween', 0.5, 1)}>
            <Image src='/about.png' alt="thinking" height={630} width={466}/>
          </motion.div>
      </motion.div>

        
    </section>
  )
}

export default About