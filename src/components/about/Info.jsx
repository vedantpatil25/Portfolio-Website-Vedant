import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Info = () => {
  const [counterOn, setCounterOn] = useState(false)

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="about__info grid">
        <div className="about__box">
          <i class="bx bxl-github"></i>
          <h2 className="about__title">
            {counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}
            +{' '}
          </h2>
          <span className="about__subtitle">Projects</span>
        </div>

        <div className="about__box">
          <i class="bx bxl-c-plus-plus"></i>
          <h3 className="about__title">
            {' '}
            {counterOn && (
              <CountUp start={0} end={500} duration={3} delay={0} />
            )}
            +{' '}
          </h3>
          <span className="about__subtitle">DSA Problems Solved</span>
        </div>

        <div className="about__box">
          <i class="bx bxs-certification"></i>
          <h3 className="about__title">
            {counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}
            +{' '}
          </h3>
          <span className="about__subtitle">Certificates</span>
        </div>
      </div>
    </ScrollTrigger>
  )
}

export default Info
