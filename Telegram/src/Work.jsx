import React from 'react'
import './Work.css'
import img1 from '../src/imgs/react-icon_svg_.webp'

const Work = () => {
  return (
    <div >
       <div className="container" id='work-section'>
        <div className="row">
          <div className="col-2 add mt-3 ms-2">
            <img src={img1} alt="...." />
          </div>
          <div className="col-10 add-body">
            <h4 className='mt-4'>React js</h4>
          </div>

           <hr className='mt-1' />

          <div className="col-2 add mt-1 ms-2"></div>
          <div className="col-10 add-body">
            <h4 className='mt-3'>Full Stact Development</h4>
          </div>

         

        </div>
       </div>

       





    </div>
    
  )
}

export default Work