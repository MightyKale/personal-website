'use client'
import { motion } from "framer-motion"
import { staggerContainer, fadeIn, slideIn } from "@/utils/motion"
import { SKILLS } from "@/constants"

const Skills = () => {
  return (
    <section id='skills' className='2xl:h-screen bg-beige-10 paddings h-full overflow-hidden'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={ {once:true,amount:0.25 } }
        className="md:px-14 xl:px-20 mt-10">
        <motion.h1 
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className='text-beige-50 font-[Radley] italic text-4xl md:text-5xl lg:text-7xl mt-12'>MY SKILLS</motion.h1>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={ {once:true,amount:0.25 } }
            className="grid md:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-4 md:gap-8 xl:gap-12 mt-6 md:mt-8 lg:mt-16 xl:mt-24">
              {SKILLS.map((skill,i) => (
                <SkillCard key={skill.title} 
                title={skill.title} 
                description={skill.description}
                icon={skill.icon}
                index={i}
                />
              )
              )}
        </motion.div>
      </motion.div>
    </section>
  )
}

const SkillCard = ( {icon, title, description, index} ) => {
  return (
    <motion.div variants={slideIn('up', 'tween', index*0.5, 1)} className="grid grid-rows-3 place-items-center bg-teal-50 p-12 md:p-4 2xl:p-12 rounded-2xl shadow-lg shadow-stone-500/50 max-h-[550px]">
      <img src={icon} alt={title} className="h-[58px]"/>
      <h2 className="text-cream-10 font-[Alegreya] text-[26px] text-center">{title}</h2>
      <p className="font-[Ubuntu] text-grey-50 text-center">{description}</p>
    </motion.div>
  )
}
export default Skills