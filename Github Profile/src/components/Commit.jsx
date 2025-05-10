import React from 'react'
import './Commit.css'

const Commit = () => {

   
const commits=new Array(217).fill(0);

const coloredIndexes =[0,31,62,93,124,155,186,1,2,3,94,95,96,187,188,189,5,6,7,8,36,67,98,99,100,
    101,132,163,191,192,193,194,10,41,72,103,134,165,196,104,105,106,13,44,75,137,168,199,
    15,46,77,108,139,170,201,171,141,173,205,19,50,81,112,143,174,
    207,176,145,114,83,53,23,55,87,118,149,180,211,115,116,117,
    27,58,89,120,151,182,213,28,29,30,61,92,123,121,122,152,184,216
]


  return (
    <div className='commit-section mt-5'>
       <div className="container">
        <div className="row">
            <div className="col-12" data-aos="fade-up">
                <h5>56 contributions in the last year</h5>
            </div>
            <div className="outline">
            <div className="col-12 d-flex justify-content-center ">
                <div className="commit-border">
                     {commits.map((_, index)=>(
                        <div key={index} className='comit-box' data-aos="fade-in"
                        style={{backgroundColor:coloredIndexes.includes(index) ? ' rgb(11, 228, 11)' : ' rgba(255, 255, 255, 0.228)'}}></div>
                     ))}
                </div>
            </div>
            </div>
        </div>
       </div>
       <div className="container mt-5">
        <div className="row">
            <div className="col-12 mt-5" data-aos="fade-up">
            <h5>Contribution activity</h5>
            </div>
           <div className="col-3 col-md-2 mt-3" data-aos="fade-up">
            <p style={{display:'inline-block'}} >April 2025</p>
           </div>
           <div className="col-9 col-md-10 mt-3" data-aos="fade-up">
            <hr style={{border:'1px solid white'}} />
           </div>
           <div className="col-12 " data-aos="fade-up">
            <p className='ms-2 display-1' data-aos="fade-right" >|</p>
          <p data-aos="fade-up"> <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#EFEFEF"><path d="m240-144-96-432h672l-96 432H240Zm58-72h364l64-288H234l64 288Zm122-144h120q15.3 0 25.65-10.29Q576-380.58 576-395.79t-10.35-25.71Q555.3-432 540-432H420q-15.3 0-25.65 10.29Q384-411.42 384-396.21t10.35 25.71Q404.7-360 420-360ZM228-624q-15.3 0-25.65-10.29Q192-644.58 192-659.79t10.35-25.71Q212.7-696 228-696h504q15.3 0 25.65 10.29Q768-675.42 768-660.21t-10.35 25.71Q747.3-624 732-624H228Zm96-120q-15.3 0-25.65-10.29Q288-764.58 288-779.79t10.35-25.71Q308.7-816 324-816h312q15.3 0 25.65 10.29Q672-795.42 672-780.21t-10.35 25.71Q651.3-744 636-744H324Zm-26 528h364-364Z"/></svg>created 15 commit 20 Repositories</p>
           <p className='ms-2 mt-2 display-1' data-aos="fade-right">|</p>
           <p data-aos="fade-up"> <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#EFEFEF"><path d="m240-144-96-432h672l-96 432H240Zm58-72h364l64-288H234l64 288Zm122-144h120q15.3 0 25.65-10.29Q576-380.58 576-395.79t-10.35-25.71Q555.3-432 540-432H420q-15.3 0-25.65 10.29Q384-411.42 384-396.21t10.35 25.71Q404.7-360 420-360ZM228-624q-15.3 0-25.65-10.29Q192-644.58 192-659.79t10.35-25.71Q212.7-696 228-696h504q15.3 0 25.65 10.29Q768-675.42 768-660.21t-10.35 25.71Q747.3-624 732-624H228Zm96-120q-15.3 0-25.65-10.29Q288-764.58 288-779.79t10.35-25.71Q308.7-816 324-816h312q15.3 0 25.65 10.29Q672-795.42 672-780.21t-10.35 25.71Q651.3-744 636-744H324Zm-26 528h364-364Z"/></svg>created 20 Repositories</p>
           <p className='ms-2 mt-2 display-3' data-aos="fade-right">|</p>
           </div>
          <div className="col-12 d-flex justify-content-center mt-3" data-aos="fade-up">
            <button className='show'>Show more activity </button>
          </div>
        </div>
       </div>
       <div className="container mt-5" data-aos="fade-in">
        <div className="row">
            <div className="col-12 mt-5">
                <footer >
           
                    <ul>
                    <i class="fa-brands fa-github" style={{color: "gray",fontSize:'30px',display:'inline-block'}}></i>
                        <li>© 2025 GitHub, Inc.Footer navigation</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Security</li>
                        <li>Status</li>
                        <li>Docs </li>
                        <li>Contact </li>
                        <li>Manage </li>
                        <li>cookies</li>
                        <li>Do not share my personal information</li>
                    </ul>
           
                </footer>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Commit