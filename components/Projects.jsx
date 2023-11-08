'use client'
import { motion } from "framer-motion"
import { staggerContainer, fadeIn, slideIn } from "@/utils/motion"
import Image from "next/image"
import { PROJECTS } from "@/constants"
import Link from "next/link"

const Projects = () => {
  return (
    <section id='projects' className='xl:h-screen bg-beige-30 paddings h-full overflow-hidden'>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={ {once:true,amount:0.25 } }
      >
         <motion.h1 
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className='text-cream-30 font-[Radley] italic text-4xl md:text-5xl lg:text-7xl mt-12'>RECENT PROJECTS</motion.h1>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={ {once:true,amount:0.25 } }
          className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-6 md:mt-8 lg:mt-10 gap-12">
        {
          PROJECTS.map((project, i) => (
            <ProjectCard 
              key={project.title}
              title={project.title}
              screenshot={project.screenshot}
              github={project.github}
              link={project.link}
              i = {i}
              />
          ))
        }
        </motion.div>
      </motion.div>
    </section>
  )
}

const ProjectCard = ( {screenshot, title, link, github, i} ) => {
  return (
    <motion.div variants={slideIn('up', 'tween', i*0.2, 1)} className="flex flex-col justify-center items-center">
      <div className="relative">
      <Image src={screenshot} alt={title} width={480} height={230} className="shadow-lg shadow-stone-500/50 rounded-lg"/>
      <div className="bg-white opacity-0 hover:opacity-70 absolute top-0 left-0 w-full h-full rounded-lg flex flex-row gap-12 justify-center items-center">
          <Link href={link} key={title} target="_blank">
            <Image src='/website.png' alt="website" height={32} width={32}/>
          </Link>
          <Link href={github} key={i} target="_blank" >
          <Image src='/github.png' alt="github" height={32} width={32}/>
          </Link>
      </div>
      
      </div>
      <p className="font-[Ubuntu] my-3 text-grey-50 uppercase">{title}</p>
    </motion.div>

  )
}

export default Projects