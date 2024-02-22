import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from "../constants";
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ title, icon , index }) => {
  return (
  <Tilt className='xs:w-[250px] w-full items-center'>
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.7)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={
          {max:45,
          scale:1,
          speed:450,}
        }
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img 
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[24px] font-bold text-center'>{title}</h3>
      </div>

    </motion.div>
  </Tilt>
  )

}


const About = () => {
  return (
    <>
      {/* this motion div is for animating texts for this section */}
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introdukce</p>
        <h2 className={styles.sectionHeadText}>Přehled.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('up', '', 0.1, 1)} 
        className='mt-1 text-secondary xs:text-[24px] text-[18px] max-w-3xl leading-[30px]'
      >
        {/* this is direction, type, delay and duration */}
        Jsme zkušený tým, který se specializuje na vývoj webových stránek a mobilních aplikací.
        SEO a marketing jsou naší silnou stránkou.
        Pokoušíme se o to, aby naše práce byly co nejjednoušší, přehledné ale efektivní a výkoné.
        Težké zkombinovat, ale my to umíme.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} 
            index={index} 
            {...service} 
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About, 'about')