import React from 'react'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const About = () => {
  return (
    <div className='about-section'>
      
       <div className="container">
        <div className="row">
           <hr />
            <div className="col-12"  style={{backgroundColor: "rgba(229, 238, 246, 0.395)"}}>
            <div data-aos="fade-up" className="col-12">
                <h1>About</h1>
            </div>
                <p  data-aos="fade-up" data-aos-delay="100" >I am Developer with expertise in HTML, CSS, JavaScript, and React, specializing in creating responsive and interactive websites💫<br /></p>

<p className='mt-2'  data-aos="fade-up" data-aos-delay="150"  >I also have a strong interest in Arduino and IoT projects, focusing on hardware-software integration. My skills enable me to design innovative solutions that connect technology and practicality. <br /></p>

<p className='mt-2'  data-aos="fade-up" data-aos-delay="200" >I enjoy building user-friendly applications and exploring new ideas. Combining web development and IoT, I strive to create impactful projects.</p>
            </div>
         <hr className='mt-5' />
        <div data-aos="fade-up" className="col-12 skills mt-5 ">
       <h4> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-120 80-600l120-240h560l120 240-400 480Zm-95-520h190l-60-120h-70l-60 120Zm55 347v-267H218l222 267Zm80 0 222-267H520v267Zm144-347h106l-60-120H604l60 120Zm-474 0h106l60-120H250l-60 120Z"/></svg> Top skills</h4>
       <p>Internet of Things (IoT) • Web Development • Front-End Development • Engineering • Arduino</p>
        </div>
             <hr className='mt-5' />
        <div className="container mt-5" style={{backgroundColor: "rgba(229, 238, 246, 0.395)"}}>
          <div className="row">
            
        
        <div className="col-12 " data-aos="fade-up">
          <h1>Experience</h1>
        </div>

          <div className="col-1 ex-icon mt-4 " data-aos="fade-right" >
          <i class="fa-solid fa-user-tie mt-3 " style={{display:'inline-block'}}></i>
          </div>
       
              <div data-aos="fade-up" className="col-8 mt-3 ms-4 ">
             
                <h5>Web Developer</h5>
                <p>self-employed</p>
                <p>Apr 2025 - present.1mo <br /> salem ,Tamil Nadu, India</p>
              </div>
              </div>
              </div>
       
       </div>
       <hr />
       <div className="container mt-5" style={{backgroundColor: "rgba(229, 238, 246, 0.395)"}}>
        <div className="row">
          <div data-aos="fade-up" className="col-12">
            <h2>Education</h2>
          </div>
          <div className="col-3 educa mt-4" data-aos="fade-right">
            <img src="https://media.licdn.com/dms/image/v2/C560BAQEiaXrhW7JI6Q/company-logo_200_200/company-logo_200_200/0/1630664806410/vinayaka_missions_research_foundation___university_logo?e=2147483647&v=beta&t=GrQsCAr83V_tc0tJz91AR8EVjjcCOKhpJQ9gsFp6wvQ" alt="" />
          </div>
          <div className="col-9 mt-3 clg " data-aos="fade-up">
            <h3>Vinayaka Mission's Research Foundation - University </h3>
            <p>B.E, Computer Science</p>
          </div>
        </div>
       </div>
       <div className="col-12 mt-5 ">
         <footer>
          <div className="container d-flex justify-content-center mt-5 " style={{backgroundColor: "rgba(229, 238, 246, 0.395)"}}>
            <div className="row">
              <div className="col-12 text-center mt-2">
                  <p >&copy; 2025 |Develped by Eshwar </p>
              </div>
                <div className="col-12 d-flex justify-content-center links ">
                <a  href="https://www.linkedin.com/in/soundhareshwaran-s-r-85a1012a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/eshwar_creativity/#"><i class="fa-brands fa-square-instagram"></i></a>
                <a href="https://github.com/eshwargit2"><i class="fa-brands fa-square-github"></i></a>
                <a href="https://www.youtube.com/@Eshwarelectrotech"><i class="fa-brands fa-square-youtube"></i></a>
                <a href="https://www.facebook.com/share/1BvY2LVKBD"><i class="fa-brands fa-square-facebook"></i></a>
                </div>
            </div>
          </div>
         </footer>
       </div>
       </div>
       
    </div>
  )
}

export default About