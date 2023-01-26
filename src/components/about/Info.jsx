import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
const Info = () => {
    useEffect(()=>{
        Aos.init({duration:500});
        }, [])
  return (
     <div className="about__info grid">

        <div className="about__box" >
        <i class='bx bxl-github'></i>
            <h2 className="about__title">10+</h2>
            <span className="about__subtitle">Projects</span>

        </div>

        <div className="about__box" >
        <i class='bx bxl-c-plus-plus'></i>
            <h3 className="about__title">500+</h3>
            <span className="about__subtitle">DSA Problems Solved</span>

        </div>

        <div className="about__box" >
        <i class='bx bxs-certification' ></i>
            <h3 className="about__title">10+</h3>
            <span className="about__subtitle">Certificates</span>

        </div>

     </div>
  )
}

export default Info