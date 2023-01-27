import React,{useEffect} from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'
import Aos from 'aos';
import "aos/dist/aos.css";

const Skills = () => {

    useEffect(() => {
        Aos.init({duration:500});
      },[]);

  return (
    <section className="skills section" id="skills" data-aos = 'fade-up'>
        <h2 className='section__title' data-aos = 'fade-up'>Skills</h2>
        <span className="section__subtitle" data-aos = 'fade-up'>Technical knowledge</span>
        <div className="skills__container container grid" data-aos = 'fade-up'>
            <Frontend/>
            <Backend/>
        </div>

    </section>
    
    )
}

export default Skills