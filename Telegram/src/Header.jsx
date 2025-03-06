import React, { useState } from 'react'
import './Header.css'
import Svg from './Svg1'
import Searchicon from './Searchicon'
import Sidenav from './Sidenav'
import Allchats from './Allchats'
import Work from './Work'
import Groups from './Groups'
import Channels from './Channels'
import Bots from './Bots'



const Header = () => {

  const  [issidenavopen , setissidenavopen]=useState(false);


  const btn =()=>{
    setissidenavopen(!issidenavopen)
  }

//   const all = () =>{
//         let allsection = document.getElementById('all-section');
//         let worksection = document.getElementById('work-section');

//         if(allsection){
//           allsection.style.display="block";
//           worksection.style.display="none";
         
//         }
//   }

//   const work = () =>{
//     let allsection = document.getElementById('all-section');
//     let worksection = document.getElementById('work-section');

//     if(allsection){
//       allsection.style.display="none";
//       worksection.style.display="block";
    
//     }
// }

  const [menus , setmenus]=useState('All');
  
  const all =()=>{
    setmenus('All')
    
  }
  const work =()=>{
    setmenus('Works')
  }

  const group =()=>{
    setmenus("Groups")
  }
  
 const chan = ()=>{
  setmenus("Chan")
 }

 const bot =()=>{
  setmenus("Bot")
 }

  

  return (
    <div>
    
    <div >
      <header>
        <nav id='navbar'>
          <div className="contaoner main ">
            <div className="row">

              <div className="col-3 mt-3 three">
                  <button  onClick={btn}><Svg/></button>
              </div>

              <div className="col-5 mt-3">
                  <h1 className='mt-2 text-white'>Telegram</h1>
              </div>

              <div className="col-3 ms-3 mt-3 ms-auto">
                 <button className='btn'><Searchicon/></button>
              </div>
              <div className="col-12 mt-2">
                <ul className='text-white'>
                  <li onClick={all}  >All</li>
                  <li onClick={work}>Work</li>
                  <li onClick={group}>Groups</li>
                  <li onClick={chan} >Channels</li>
                  <li onClick={bot} >Bots</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
   {issidenavopen && <Sidenav/>}
    </div>
    {menus === "All" && <Allchats/>}
    {menus === "Works" && <Work/>}
    {menus === "Groups" && <Groups/>}
    {menus === "Chan" && <Channels/> }
    {menus === "Bot" && <Bots/>}

    </div>
  )
}

export default Header