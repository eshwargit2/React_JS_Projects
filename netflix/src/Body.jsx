import React from 'react'
import './Body.css'
import img1 from './imgs/movie1.jpg'
import img2 from './imgs/movie2.jpg'
import img3 from './imgs/movie3.jpg'
import img4 from './imgs/movie4.jpg'
import img5 from './imgs/movie5.jpg'
import img6 from './imgs/movie6.jpg'
import img7 from './imgs/movie7.jpg'


const Body = () => {
  return (
    <div className='Body'>

       <div className="container section ">
        <div className="row">
            <div className="col-12 mt-5">
                <h3 className='text-white ms-4'>Trending Now</h3>
            </div>
            <div className="col-12 ms-4 mt-3 col-md-2">
                <button type='button' className='india-btn'>
                    <ul>
                        <select>
                            <option>India</option>
                            <option>Chaina</option>


                        </select>
                    </ul>
                </button>
            </div>
            <div className="col-12 col-md-1 mt-3">
            <button type='button' className='movie-btn'>movie</button>
            </div>
        </div>
       </div>

       <div className="container movies-list mt-5">
   
            <div className="col-3 movie">
                  <img src={img1} alt="" />
            </div>

            <div className="col-3 movie">
                 <img src={img2} alt="" className='mt-1' />
            </div>

            <div className="col-3 movie">
                 <img src={img3} alt="" />
            </div>
            <div className="col-3 movie">
                <img src={img4} alt="" />
            </div>
            <div className="col-3 movie">
                <img src={img5} alt="" />
            </div>
            <div className="col-3 movie">
                <img src={img6} alt="" />
            </div>
            <div className="col-3 movie">
                <img src={img7} alt="" />
            </div>

            
            <div className="col-3 movie">
                  <img src={img1} alt="" />
            </div>

            <div className="col-3 movie">
                 <img src={img2} alt="" className='mt-1' />
            </div>

            <div className="col-3 movie">
                 <img src={img3} alt="" />
            </div>
            <div className="col-3 movie">
                <img src={img4} alt="" />
            </div>
            <div className="col-3 movie">
                <img src={img5} alt="" />
            </div>
            <div className="col-3 movie">
                <img src={img6} alt="" />
            </div>
            <div className="col-3 movie">
                <img src={img7} alt="" />
            </div>
           </div>
    </div>
  )
}

export default Body