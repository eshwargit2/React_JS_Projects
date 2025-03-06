import React from 'react'
import './Header.css'
import img1 from './imgs/Netflix_Logo.png'

const Header = () => {
  return (
    <div>
       <header>
        <nav>
            <div className="banner">
                 <div className="container con">
                     <div className="row">

                      <div className="col-5 col-md-8 logo-container">
                              <img src={img1} alt="...." className='logo mt-2' />
                         </div>
                         <div className="col-7 col-md-4 mt-5 ">
                            <button className="language mt-3  lan-btn ">ENGLISH</button>
                            <button className="language mt-3  sign-btn ms-4 text-center " >Sign in </button>
                         </div>
                     </div>
                 </div>
              
              <div className="container mt-5 title d-flex justify-content-center">
                <div className="row">

                  <div className="col-12 mt-3">
                    <h1 className='text-white text-center'>Unlimited movies, TV <br /> shows and more</h1>
                  </div>
                  
                  <div className="col-12">
                    <h5 className='text-white text-center mt-3'>Starts at ₹149. Cancel at any time.</h5>
                  </div>
                  <div className="col-12 mt-3">
                       <p className='text-white text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
                  </div>
                    
                    <div className="col-12 col-md-12 d-flex justify-content-center mt-3">
                       <input type="text" className='input ' placeholder='Email address' />
                       <button className="get-start ms-3">Get Started
                       <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg> </button>
                    </div>

                    {/* <div className="col-12 hr mt-5 ">

                    </div> */}
                </div>
              </div>
               
            </div>
        </nav>
       </header>
    </div>
  )
}

export default Header