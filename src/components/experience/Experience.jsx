import React from 'react'
import { useEffect } from 'react'
import './Experience.css'
import { Data } from './Data'
import Aos from 'aos'
import 'aos/dist/aos.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation, Autoplay, Mousewheel } from 'swiper'

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <section
      className="experience container section "
      data-aos="fade-up"
      id="experience"
    >
      <h2 className="section__title">Experince</h2>
      <span className="section__subtitle">
        Professional Journey and Accomplishments
      </span>

      <Swiper
        className="experience__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={true}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, Navigation, Autoplay, Mousewheel]}
      >
        {Data.map(
          ({
            id,
            image,
            title,
            description,
            date,
            location,
            position,
            skills,
          }) => {
            return (
              <SwiperSlide className="experience__card">
                <div className="date_location">
                  <h4 className="experience__date">{date}</h4>
                  <h4 className="experience__location">{location}</h4>
                </div>

                <br />
                <img src={image} alt="" className="experience__img" />
                <h3 className="experience__name">{title}</h3>
                <h4>{position}</h4>
                <p className="experience__description">{description}</p>
                <br />
                <h4>
                  {' '}
                  Skills : <span className="experience__skills">{skills}</span>
                </h4>
              </SwiperSlide>
            )
          },
        )}
      </Swiper>
    </section>
  )
}

export default Experience
