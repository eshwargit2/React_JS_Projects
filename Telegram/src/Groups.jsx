import React from 'react'
import './Groups.css'
import img1 from '../src/imgs/movies club.jpeg';
import img2 from '../src/imgs/flipcard.png';
import img3 from '../src/imgs/Songs.jpeg';
import img4 from '../src/imgs/Amazon.png'
import img5 from '../src/imgs/tamil-movieswebp.webp';


const Groups = () => {
  return (
    <div>
        <div className="conntainer">
            <div className="row">
                <div className="col-2 group-icon mt-3 ms-3">
                   <img src={img1} alt="..."  />
                </div>
                <div className="col-10 mt-4">
                    <h3 className='ms-2'>Movies Club</h3>
                    
                </div>

                <hr className='mt-2' />

                <div className="col-2 group-icon  ms-3">
                    <img src={img2} alt="...." />
                </div>
                <div className="col-10 mt-2">
                    <h3 className='ms-2'>Flipcard</h3>
                 
                </div>

                <hr className='mt-2' />

                <div className="col-2 group-icon  ms-3">
                    <img src={img3} alt="...." />
                </div>
                <div className="col-10 mt-2">
                    <h3 className='ms-2'>Songs</h3>
                </div>

                <hr className='mt-2' />

                <div className="col-2 group-icon  ms-3">
                    <img src={img4} alt="....." />
                </div>
                <div className="col-10 mt-2">
                    <h3 className='ms-2'>Amazon</h3>
                </div>


                
                <hr className='mt-2' />

                <div className="col-2 group-icon  ms-3">
                    <img src={img5} alt="....." />
                </div>
                <div className="col-10 mt-2">
                    <h3 className='ms-2'>Tamil Movies</h3>
                </div>










            </div>
        </div>
    </div>
  )
}

export default Groups