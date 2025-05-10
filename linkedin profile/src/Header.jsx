import React from 'react'
import './Header.css'
import banner from './imgs/react banner.jpeg'
import dp from './imgs/eshwar.png'
import About from './About'


const Header = () => {
  return (
    <div className='header'>
        <header>
            <div className="banner ">
                <img src={banner} alt="react banner" />
            </div>
            <div className="dp" data-aos="fade-right">
                <img src={dp} alt="eshwer-pro" className='animi'  />
             </div>  
              <div className="container mt-2 title">
                <div className="row">
                    <div className="col-12 name"  data-aos="fade-up"  >
                        <h1>SOUNDHARESHWARN S.R</h1>
                    </div>
                    <div className="col-12 skils "  data-aos="fade-up" data-aos-delay="100" >
                        <p className='text-dark '>Front-End Developer | Arduino and IOT projects Development </p>
                    </div>
                    
                    <div className="col-12 edu "  data-aos="fade-up" data-aos-delay="150" >
                        <h5 >Vinayaka Mission's Research Foundation - University</h5>
                        <p className='text-secondary' >Salem, Tamil Nadu , India  </p>
                    </div>
                    <div className=" col-12 link"  data-aos="fade-up" data-aos-delay="200" >
                        <a href="https://soundharesh.netlify.app">Resume | Portfolio <i class="fa-solid fa-link" style={{color: "#165cd4"}}></i> </a>
                    </div>
                    <div className="col-12 connection"  data-aos="fade-up" data-aos-delay="250" >
                           <a href="#">120 followers</a>
                    </div>
                    <div className="col-12 btn-sec1 "  data-aos="fade-up" data-aos-delay="300" >
                        <button data-aos-delay="300"  className='open' onClick={()=>window.location.href="https://www.linkedin.com/in/soundhareshwaran-s-r-85a1012a7"}  >Open to</button>
                        <button data-aos-delay="300"  className='add '>Add section</button>
                    </div>
                    <div className="col-12 btn-sec2"  data-aos="fade-up" data-aos-delay="300" >
                        <button>Enhance Profile</button>
                    </div>

                </div>
              </div> 
              <div className="container about-sec">
                <div className="row">
                   <div className="col-12">
                   <About/>
                   </div>
                </div>
             </div>   
        </header>
      
    </div>
  )
}

export default Header