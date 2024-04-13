import React, { useEffect } from 'react'
import './work.css'
import Works from './Works'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <section className="work section" id="portfolio" data-aos="fade-up">
      <h2 className="section__title" data-aos="fade-up">
        Portfolio
      </h2>
      <span className="section__subtitle" data-aos="fade-up">
        Projects
      </span>
      <Works />
    </section>
  )
}

export default Work
