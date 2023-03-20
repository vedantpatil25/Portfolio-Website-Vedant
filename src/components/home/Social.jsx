import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

const Social = () => {

        useEffect(() => {
                Aos.init({duration:500});
              },[]);



  return (
    <div className="home__social" data-aos ="fade-up">
        <a href="https://www.linkedin.com/in/vedant-patil-047194224/" className="home__social-icon" target = "_blank" rel="noopener noreferrer"
><i class="uil uil-linkedin"></i></a>

        <a href="https://github.com/vedantpatil25" className="home__social-icon" target = "_blank" rel="noopener noreferrer"
><i class="uil uil-github"></i></a>

        <a href="mailto:vedantpatil2002@gmail.com" className="home__social-icon" target = "_blank" rel="noopener noreferrer"
><i class='bx bxl-gmail'></i></a>
    </div>
    )
}

export default Social