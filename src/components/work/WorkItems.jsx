import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

const WorkItems = ({item}) => {

  useEffect(() => {
    Aos.init({duration:500});
  },[]);

  return (
    <div className='work__card' data-aos ="fade-up" key = {item.id}>
        <img src={item.image} alt=""  className='work__img'/>
        <h3 className="work__title" >{item.title}</h3>
        <a href="#" className="work__button">
            View Project <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default WorkItems