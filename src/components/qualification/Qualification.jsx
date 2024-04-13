import React from 'react'
import './qualification.css'

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">On the Journy</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex qualification__active">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button button--flex qualification__active">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__section">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"></h3>
                <span className="span qualification__subtitle"></span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2021 present
                </div>
              </div>

              <div>
                <span className="qulification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
