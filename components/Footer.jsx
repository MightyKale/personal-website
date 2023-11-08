import {BsLinkedin, BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <section className="bg-cream-10 flex md:flex-row flex-col gap-5 p-4 text-grey-50 md:justify-between">
      <div className="font-[Ubuntu] text-sm flex justify-center md:justify-start">
        <p>© 2023 Amy Chu All Rights Reserved.</p>
      </div>
      <div className="font-[Ubuntu] flex flex-row gap-4 text-[24px] justify-center">
        <a href="www.linkedin.com/in/amy-chu-xiaoxiao" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/MightyKale" target='_blank'><BsGithub /></a>
        
      </div>
      <div className="font-[Ubuntu] text-sm flex justify-center md:justify-end">
        <p>contact: amy.chu.dev@gmail.com</p>
      </div>
    </section>
  )
}

export default Footer