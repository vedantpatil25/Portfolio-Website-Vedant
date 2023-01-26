import React from 'react'

const Info = () => {
  return (
     <div className="about__info grid">

        <div className="about__box">
        <i class='bx bx-award about__icon' ></i>
            <h3 className="about__title">Title-1</h3>
            <span className="about__subtitle">subtitle1</span>

        </div>

        <div className="about__box">
        <i class='bx bx-briefcase about__icon' ></i>
            <h3 className="about__title">Title-2</h3>
            <span className="about__subtitle">2.give them classname as about__icons</span>

        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon' ></i>
            <h3 className="about__title">Title-3</h3>
            <span className="about__subtitle">3.copy font line</span>

        </div>

     </div>
  )
}

export default Info