import React from 'react'
import './Sidenav.css'
import pro from '../src/imgs/Eshwar.png'
import Profile from './Profile'
import Newgroup from './Newgroup'
import Contact from './Contact'
import Calls from './Calls'
import Save from './Save'
import Setting from './Setting'
import Invite from './Invite'
import Gift from './Gift'

const Sidenav = () => {
 
  const btn =()=>{
    const bar = document.getElementById('sidenav')
    if(bar){
      bar.style.display="none"
    }
  }


  return (
    <div>
     <div className="container " id='sidenav'>
      <div className="row">
        
          <div className="col-12">
          {/* <button onClick={btn} className='close'  ><Close/></button> */}
               <aside className='sidebar' onClick={btn}>
                   <ul className='list col-4'>
                       <li >
                        <img src={pro} alt="...." />
                       </li>
                        <li className='ms-1 col-9 mt-2'>
                          <h2>Eshwar</h2>
                          <p className='text-center'>1234567890</p>
                        </li>
                    </ul>
                    <hr />
                    <div className="container">
              <div className="row">
                <div className="col-2 "><Profile/></div>
                <div className="col-7 ms-3  mt-1"><h5>My profile</h5></div>
              </div>
              <hr />
              <div className="container">
                <div className="row">
                <div className="col-2" ><Newgroup/></div>
                <div className="col-7 ms-3 mt-1 " style={{display:'inline-block'}}><h5>New Gruop</h5></div>
                </div>
              </div>

              <div className="container mt-4">
                <div className="row">
                <div className="col-2" ><Contact/></div>
                <div className="col-7 ms-3 mt-1 " style={{display:'inline-block'}}><h5>Contact</h5></div>
                </div>
              </div>


              <div className="container mt-4">
                <div className="row">
                <div className="col-2" ><Calls/></div>
                <div className="col-7 ms-3 mt-1 " style={{display:'inline-block'}}><h5>Calls</h5></div>
                </div>
              </div>

              <div className="container mt-4">
                <div className="row">
                <div className="col-2" ><Save/></div>
                <div className="col-7 ms-3 mt-1 " style={{display:'inline-block'}}><h5>Saved Messages</h5></div>
                </div>
              </div>

              <div className="container mt-4">
                <div className="row">
                <div className="col-2" ><Setting/></div>
                <div className="col-7 ms-3 mt-1 " style={{display:'inline-block'}}><h5>Settings</h5></div>
                </div>
              </div>
             <hr />

             <div className="container mt-4">
                <div className="row">
                <div className="col-2" ><Invite/></div>
                <div className="col-7 ms-3 mt-1 " style={{display:'inline-block'}}><h5>Invite Friends</h5></div>
                </div>
              </div>

              <div className="container mt-4">
                <div className="row">
                <div className="col-2" ><Gift/></div>
                <div className="col-7 ms-3 mt-1 " style={{display:'inline-block'}}><h5>Telegram Features</h5></div>
                </div>
              </div>


            </div>
                </aside>
            </div>
           
       </div>
     </div>
    </div>
  )

}



export default Sidenav