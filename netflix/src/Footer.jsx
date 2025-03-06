import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-12">
                    <p className='text-secondary'>Questions? Call 000-800-919-1743</p>
                </div>

                <div className="col-12 mt-2 col-md-3">
                  <ul className='ul-items'>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Speed Test</a></li>
                  </ul>
                </div>

                <div className="col-12 mt-2 col-md-3">
                  <ul className='ul-items'>
                    <li><a href="#">Help Centre</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Cookie Preferences</a></li>
                    <li><a href="#">Legal Notices</a></li>
                  </ul>
                </div>

                <div className="col-12 mt-2 col-md-3">
                  <ul className='ul-items'>
                    <li><a href="#">Account</a></li>
                    <li><a href="#"> Ways to Watch </a></li>
                    <li><a href="#">Corporate Information</a></li>
                    <li><a href="#">Only on Netflix</a></li>
                  </ul>
                </div>

                <div className="col-12 mt-2 col-md-3">
                  <ul className='ul-items'>
                    <li><a href="#">Media Centre</a></li>
                    <li><a href="#">Terms of Use </a></li>
                    <li><a href="#">  Contact Us </a></li>
                  
                  </ul>
                </div>
                  <div className="col-12">
                  <button className="language mt-3  lan-btn ms-3 ">ENGLISH</button>
                  </div>

                  <div className="col-12 mt-3">
                    <p className='ms-3'>Netflix India</p>
                  </div>




            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer