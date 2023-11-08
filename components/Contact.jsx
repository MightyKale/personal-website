'use client'
import { useState } from "react";
import { motion } from "framer-motion"
import { staggerContainer, fadeIn, slideIn } from "@/utils/motion"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const onSubmit = async(e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
        body: JSON.stringify({
          name, email, message
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
    
    const { msg, success } = await res.json();
    setError(msg)
    setSuccess(success)

    if (success) {
      setName("");
      setEmail("");
      setMessage("")
    }
};

  return (
    <section id='contact' className='bg-teal-50 paddings h-full overflow-hidden'>
      <motion.div
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={ {once:true,amount:0.25 } }
         className="flex 2xl:flex-row flex-col gap-12 xl:gap-2"
        >
          <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={ {once:true,amount:0.25 } }
              className="flex flex-1 flex-col justify-start md:px-14 xl:px-20">
            <motion.h1 
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className='text-cream-10 font-[Radley] italic text-4xl md:text-5xl lg:text-7xl mt-12 uppercase'>Let's Collaborate</motion.h1>

          <motion.p 
            variants={slideIn('left', 'tween', 0.5, 1)}
            className="font-[Ubuntu] mt-6 md:mt-8 lg:mt-12 text-cream-10 text-sm md:text-lg xl:text-[22px] xl:leading-10">
            I'm excited to embark on new projects and collaborations.  Whether you're an entrepreneur, a small business owner, or an individual with a personal project, I'm here to help you establish a powerful online presence that captures attention and drives results.
            <br/>
            <br/>
            Feel free to explore my portfolio to get a taste of what I can create for you. I'm ready to bring your ideas to life and craft a website that not only meets but exceeds your expectations.
            <br/>
            <br/>
            Let's create something amazing together. Contact me today to start the journey towards your dream website.
          </motion.p>
          </motion.div>
          <motion.div 
            variants={slideIn('right', 'tween', 0.5, 1)}
            className="border-[1px] border-cream-10 mt-12 flex flex-1 md:mx-14 xl:mx-20 p-12 justify-center">
          <form onSubmit={onSubmit} name="contact form" id="form" className="flex flex-col font-[Radley] text-cream-10 text-lg xl:text-[22px] w-full md:w-[80%]">
              <label htmlFor="name">Full Name:</label>
              <input type="text" value={name} onChange={ e => setName(e.target.value)} className="mt-2 text-grey-50"/>
              <label htmlFor="email" className="mt-4">Email:</label>
              <input type="email" value={email} onChange={ e => setEmail(e.target.value)} className="mt-2 text-grey-50"/>
              <label htmlFor="message" className="mt-4">Message:</label>
              <textarea name="" id="" cols="30" rows="10" value={message} onChange={ e => setMessage(e.target.value)} className="mt-2 text-grey-50"></textarea>
              <button type="submit" className="border-[1px] border-cream-10 rounded-md p-2 mt-4 hover:bg-cream-10 hover:text-teal-50">Submit</button>
              <div className="mt-8 flex justify-center flex-col gap-2 items-center">{
                  error && error.map(e => (
                    <div key={e}
                        className={`${success ? 'text-cream-10' : 'text-grey-50' } font-[Ubuntu] text-center`}>{e}</div>
                  ))

                }</div>
        </form>
          </motion.div>
          </motion.div>

      
     
    </section>
  )
}

export default Contact