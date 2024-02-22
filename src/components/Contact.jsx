import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import emailjs from '@emailjs/browser'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [ form, setForm ] = useState({
    name:'',
    email:'',
    message:'',
  })
  const [ loading, setLoading ] = useState(false)

  const handleChange = (e) => {
    const { name, value  } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.send(
      process.env.VITE_APP_EMAILJS_SERVICE_ID,
      process.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Centrum',
        from_email: form.email,
        to_email: 'nathanaelnux@gmail.com',
        message: form.message
      },
      process.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    )
    .then(() => {
      setLoading(false)
      alert('Zpráva byla úspěšně odeslána, děkujeme! Brzy se vám ozveme, jen co budeme moci.')
      setForm({ 
        name:'', 
        email:'', 
        message:''
      })
    }, (error) => {
      setLoading(false)
      console.log(error)
      alert('Něco se pokazilo, zkuste to prosím znovu. Kdyby prblém přetrvával, kontaktujte nás přímo na emailu: nathanaelnux@gmail.com . Děkujeme za pochopení.')
    }
    )
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Spojte se s námi</p>
          <h3 className={styles.sectionHeadText}>Kontakt.</h3>
          <form 
            ref={formRef}
            className='mt-12 flex flex-col gap-8'
            onSubmit={handleSubmit}>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Vaše Jméno</span>
                <input 
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder='Vaše jméno'
                  className='py-4 bg-tertiary px-4 border border-transparent placeholder:text-secondary text-white outline-none font-medium rounded-lg focus:outline-none focus:border focus:border-secondary'
                />
              </label>
          </form>
          <form 
            ref={formRef}
            className='mt-12 flex flex-col gap-8'
            onSubmit={handleSubmit}>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Váš E-mail</span>
                <input 
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder='E-mail'
                  className='py-4 bg-tertiary px-4 border border-transparent placeholder:text-secondary text-white outline-none font-medium rounded-lg focus:outline-none focus:border focus:border-secondary'
                />
              </label>
          </form>
          <form 
            ref={formRef}
            className='mt-12 flex flex-col gap-8'
            onSubmit={handleSubmit}>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Vaše Zpráva:</span>
                <textarea
                  rows="7"
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='Co byste nám chtěli napsat?'
                  className='py-4 bg-tertiary px-4 border border-transparent placeholder:text-secondary text-white outline-none font-medium rounded-lg focus:outline-none focus:border focus:border-secondary'
                />
              </label>
              <button 
                type='submit'
                className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold rounded-xl shadow-md shadow-primary'
              >
                {loading ? 'Odesílám...' : 'Poslat Zprávu'}
              </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')