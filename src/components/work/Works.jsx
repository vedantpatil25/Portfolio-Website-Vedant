import React from 'react'
import { useEffect } from 'react'
import { projectData } from './Data'
import WorkItems from './WorkItems'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Works = () => {
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <div>
      <div className="work__container container grid" data-aos="fade-up">
        {projectData.map((item) => {
          return <WorkItems item={item} key={item.id} />
        })}
      </div>
    </div>
  )
}

export default Works
