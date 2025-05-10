import React, { useRef } from 'react'
import './Header.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



const Header = () => {


  const sidenavRef = useRef(null)

  function openNav() {
    if(sidenavRef.current){
      sidenavRef.current.style.width='250px'
     
    }
  }
  
  function closeNav() {
    if(sidenavRef.current){
      sidenavRef.current.style.width='0px'
    }
  }






  return (
    <div className='header' >
       <header>
        <nav>
        
            
            <div className="container ">
                <div className="row">
                    <div className="col-md-3 col-12 mt-3 ">
                    <i class="fa-brands fa-github" style={{color: "#fbfcfe",fontSize:'30px',display:'inline-block'}}></i>
                    <h5 style={{display:'inline-block'}} className='ms-3 '>eshwargit2</h5>
                    <span style={{fontSize:'30px',cursor:'pointer'}} onClick={()=>openNav()}>&#9776;</span>
                    </div>
                </div>
                <div className="col">
                <div id="mySidenav" ref={sidenavRef} className="sidenav">
  <a className="closebtn" onClick={closeNav}>&times;</a>
  <a href="#sp-repo"  onClick={closeNav}> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="M480-72q-69-64-155.22-104T144-216v-384q95 0 179.5 39T480-456q72-66 156.5-105T816-600v384q-95.49 0-181.24 40Q549-136 480-72Zm0-95q59-44 125-75t139-41v-237q-78 14-142.5 59.5T480-358q-57-57-121.5-102.5T216-520v237q73 9 139 40.5T480-167Zm0-385q-70 0-119-49t-49-119q0-70 49-119t119-49q70 0 119 49t49 119q0 70-49 119t-119 49Zm0-72q39.6 0 67.8-28.2Q576-680.4 576-720q0-39.6-28.2-67.8Q519.6-816 480-816q-39.6 0-67.8 28.2Q384-759.6 384-720q0 39.6 28.2 67.8Q440.4-624 480-624Zm0-96Zm0 362Z"/></svg> overview</a>
  <a href="#reposi"  onClick={closeNav}><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="m240-144-96-432h672l-96 432H240Zm58-72h364l64-288H234l64 288Zm122-144h120q15.3 0 25.65-10.29Q576-380.58 576-395.79t-10.35-25.71Q555.3-432 540-432H420q-15.3 0-25.65 10.29Q384-411.42 384-396.21t10.35 25.71Q404.7-360 420-360ZM228-624q-15.3 0-25.65-10.29Q192-644.58 192-659.79t10.35-25.71Q212.7-696 228-696h504q15.3 0 25.65 10.29Q768-675.42 768-660.21t-10.35 25.71Q747.3-624 732-624H228Zm96-120q-15.3 0-25.65-10.29Q288-764.58 288-779.79t10.35-25.71Q308.7-816 324-816h312q15.3 0 25.65 10.29Q672-795.42 672-780.21t-10.35 25.71Q651.3-744 636-744H324Zm-26 528h364-364Z"/></svg> Repositories</a>
  <a href="https://github.com/eshwargit2?tab=repositories"  onClick={closeNav}><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h171q8-31 33.5-51.5T480-888q34 0 59.5 20.5T573-816h171q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm72-72h288v-72H288v72Zm0-156h384v-72H288v72Zm0-156h384v-72H288v72Zm192-168q10.4 0 17.2-6.8 6.8-6.8 6.8-17.2 0-10.4-6.8-17.2-6.8-6.8-17.2-6.8-10.4 0-17.2 6.8-6.8 6.8-6.8 17.2 0 10.4 6.8 17.2 6.8 6.8 17.2 6.8ZM216-216v-528 528Z"/></svg> Projects</a>
  <a href="#"  onClick={closeNav}><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="M444-189v-270L216-591v270l228 132Zm72 0 228-131v-270L516-459v270Zm-36-333 235-135-236-135-234 135 235 135ZM180-258q-17.1-9.88-26.55-26.06Q144-300.23 144-320v-320q0-19.77 9.45-35.94Q162.9-692.12 180-702l263-152q17-10 37-10t37 10l263 152q17.1 9.88 26.55 26.06Q816-659.77 816-640v320q0 19.77-9.45 35.94Q797.1-267.88 780-258L516-105q-17.13 10-36.07 10Q461-95 444-105L180-258Zm300-222Z"/></svg> Packages</a>
  <a href="#"  onClick={closeNav}><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="m352-293 128-76 129 76-34-144 111-95-147-13-59-137-59 137-147 13 112 95-34 144ZM243-144l63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Zm237-333Z"/></svg> Starts</a>
</div>
                </div>
            </div>
            
            
            <div className="container mt-3 menu" >
                <div className="row">
                    <div className="col-12 menu-items">
                        <p> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="M480-72q-69-64-155.22-104T144-216v-384q95 0 179.5 39T480-456q72-66 156.5-105T816-600v384q-95.49 0-181.24 40Q549-136 480-72Zm0-95q59-44 125-75t139-41v-237q-78 14-142.5 59.5T480-358q-57-57-121.5-102.5T216-520v237q73 9 139 40.5T480-167Zm0-385q-70 0-119-49t-49-119q0-70 49-119t119-49q70 0 119 49t49 119q0 70-49 119t-119 49Zm0-72q39.6 0 67.8-28.2Q576-680.4 576-720q0-39.6-28.2-67.8Q519.6-816 480-816q-39.6 0-67.8 28.2Q384-759.6 384-720q0 39.6 28.2 67.8Q440.4-624 480-624Zm0-96Zm0 362Z"/></svg> overview</p>
                        <p> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="m240-144-96-432h672l-96 432H240Zm58-72h364l64-288H234l64 288Zm122-144h120q15.3 0 25.65-10.29Q576-380.58 576-395.79t-10.35-25.71Q555.3-432 540-432H420q-15.3 0-25.65 10.29Q384-411.42 384-396.21t10.35 25.71Q404.7-360 420-360ZM228-624q-15.3 0-25.65-10.29Q192-644.58 192-659.79t10.35-25.71Q212.7-696 228-696h504q15.3 0 25.65 10.29Q768-675.42 768-660.21t-10.35 25.71Q747.3-624 732-624H228Zm96-120q-15.3 0-25.65-10.29Q288-764.58 288-779.79t10.35-25.71Q308.7-816 324-816h312q15.3 0 25.65 10.29Q672-795.42 672-780.21t-10.35 25.71Q651.3-744 636-744H324Zm-26 528h364-364Z"/></svg> Repositories</p>
                        <p> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h171q8-31 33.5-51.5T480-888q34 0 59.5 20.5T573-816h171q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm72-72h288v-72H288v72Zm0-156h384v-72H288v72Zm0-156h384v-72H288v72Zm192-168q10.4 0 17.2-6.8 6.8-6.8 6.8-17.2 0-10.4-6.8-17.2-6.8-6.8-17.2-6.8-10.4 0-17.2 6.8-6.8 6.8-6.8 17.2 0 10.4 6.8 17.2 6.8 6.8 17.2 6.8ZM216-216v-528 528Z"/></svg> Projects</p>
                        <p> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="M444-189v-270L216-591v270l228 132Zm72 0 228-131v-270L516-459v270Zm-36-333 235-135-236-135-234 135 235 135ZM180-258q-17.1-9.88-26.55-26.06Q144-300.23 144-320v-320q0-19.77 9.45-35.94Q162.9-692.12 180-702l263-152q17-10 37-10t37 10l263 152q17.1 9.88 26.55 26.06Q816-659.77 816-640v320q0 19.77-9.45 35.94Q797.1-267.88 780-258L516-105q-17.13 10-36.07 10Q461-95 444-105L180-258Zm300-222Z"/></svg> Packages</p>
                        <p> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="m352-293 128-76 129 76-34-144 111-95-147-13-59-137-59 137-147 13 112 95-34 144ZM243-144l63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Zm237-333Z"/></svg> Starts</p>
                    </div>
                </div>
            </div>

        </nav>
        <hr />
       </header>
    </div>
  )
}

export default Header