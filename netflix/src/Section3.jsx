import React from 'react'
import './Section3.css'

const Section3 = () => {
  return (
    <div>
        <div className="container  section3 mt-5">
            <div className="row">
                <div className="col-12">
                  <p className='text-white text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <div className="col-12 input-se mt-3">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 col-md-8">
                        <input type="text" placeholder='Email address' />
                        </div>
                        <div className="col-12 col-md-3 mt-3">
                        <button type='button' className=''>Get Started
                    <svg className='ms-1' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                    </button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Section3