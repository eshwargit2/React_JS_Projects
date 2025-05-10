import React from 'react'
import './Sp_repo.css'
import Repos from './Repos'
import Commit from './Commit'

const sp_repo = () => {
  return (
    <div className=' spcial-repo  mt-5' id='sp-repo'>
        <div className="container re ">
            <div className="row boder-c" data-aos="fade-up" >
                <div className="col-12" style={{fontSize:'12px'}} data-aos="fade-up">
                    <p className='text-white ms-2 mt-4'>eshwargit2/README.md</p>
                </div>
                <div className="col-12 col-md-12 ms-2" >
                    <h4>Hi there 👋 it's me  Soundhareshwaran S.R</h4>
                    <hr />
                </div>
                <div className="col-12">
                    <ul>
                        <li>🔭 Here's My <a href="https://soundharesh.netlify.app/">Portfolio</a> </li>
                        <li>🌱 I’m currently learning web development</li>
                        <li>💬 Ask me about Tech</li>
                        <li>📫 How to reach me:</li>
                        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" onClick={()=>window.location.href="https://www.instagram.com/eshwar_creativity/profilecard/?igsh=MWlmMnRjZnZzdjl6NQ=="} /> 
                    </ul>
                </div>
                 <div className="col-12 mt-5">
                    <h4>I code in</h4>
                    <hr />
                 </div>
                 <div className="col-12 icons mt-2">
                    <img src="https://img.icons8.com/color/48/c-programming.png" alt="" />
                    <img src="https://img.icons8.com/color/48/c-plus-plus-logo.png" alt="" />
                    <img src="https://img.icons8.com/fluency/48/python.png" alt="" />
                    <img src="https://img.icons8.com/color/48/javascript--v1.png" alt="" />
                    <img src="https://img.icons8.com/color/48/html-5--v1.png" alt="" />
                    <img src="https://img.icons8.com/color/48/css3.png" alt="" />
                    <img src="https://img.icons8.com/color/48/bootstrap--v2.png" alt="" />
                    <img src="https://img.icons8.com/color/48/arduino.png" alt="" />
                   
                    <img src="https://img.icons8.com/color/48/react-native.png" alt="" />
                    <img src="https://img.icons8.com/fluency/50/node-js.png" alt="" />
                    <img src="https://img.icons8.com/color/48/mongodb.png" alt="" />
                    <img src="https://img.icons8.com/arcade/48/sql.png" alt="" />
                 </div>
                 <div className="col-12  mt-5 ">
                    <h4>IOT hardware </h4>
                    <hr />
                 </div>
                 <div className="col-12 icons mt-2">
                    <img src="https://img.icons8.com/stickers/50/arduino-uno-board.png" alt="" />
                    <img src="https://img.icons8.com/fluency/50/raspberry-pi-zero.png" alt="" />
                 </div>
            </div>
            <Repos/>
            <Commit/>
        </div>
        
    </div>
  )
}

export default sp_repo