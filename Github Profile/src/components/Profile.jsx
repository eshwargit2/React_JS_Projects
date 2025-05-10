import React from 'react'
import './Profile.css'
import eshwarphoto from '../imags/Eshwar.png'
import pull from '../imags/pull-shark-default-498c279a747d.png'


const Profile = () => {
  return (
    <div className='img-side'  >
       
        <div className="container  mt-5">
            <div className="row">
                <div className="col-3 col-md-12 dp" data-aos="fade-right">
                   <img src={eshwarphoto} alt="eshwar photo" />
                   <div className="icon"> <p className='emoji' >🎯</p> <p className='i-name'>Focusing</p> </div>
                </div>
                <div className="col-9 col-md-12 d-flex text-center name" data-aos="fade-in">
                    <h3>Soundhareshwaran S.R</h3>
                </div>
                <div className="col-12 user-name" data-aos="fade-up">
                    <p  style={{fontSize:'18px',color:'gray',fontWeight:'200'}}>eshwargit2 . he/him</p>
                </div>
                <div className="col-12 bio-ski" data-aos="fade-up">
                    <p>Front end Developer | arduino and iot Development</p>
                </div>
                <div className="col-12 d-flex justify-content-center" data-aos="fade-up">
                    <button type='button' className='follow' onClick={()=>window.location.href="https://github.com/eshwargit2"} >Follow</button>
                </div>
                <div className="col-12 mt-2" data-aos="fade-up" >
                    <p className='text-secondary'> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="M96-192v-92q0-25.78 12.5-47.39T143-366q54-32 114.5-49T384-432q66 0 126.5 17T625-366q22 13 34.5 34.61T672-284v92H96Zm648 0v-92q0-42-19.5-78T672-421q39 8 75.5 21.5T817-366q22 13 34.5 34.67Q864-309.65 864-284v92H744ZM384-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm336-144q0 60-42 102t-102 42q-8 0-15-.5t-15-2.5q25-29 39.5-64.5T600-624q0-41-14.5-76.5T546-765q8-2 15-2.5t15-.5q60 0 102 42t42 102ZM168-264h432v-20q0-6.47-3.03-11.76-3.02-5.3-7.97-8.24-47-27-99-41.5T384-360q-54 0-106 14t-99 42q-4.95 2.83-7.98 7.91-3.02 5.09-3.02 12V-264Zm216.21-288Q414-552 435-573.21t21-51Q456-654 434.79-675t-51-21Q354-696 333-674.79t-21 51Q312-594 333.21-573t51 21ZM384-264Zm0-360Z"/></svg> <span className='text-white'>4</span> followers . <span className='text-white'>5</span> following</p>
                </div>
                <div className="col-12" data-aos="fade-up">
                    <p> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="M480.21-480Q510-480 531-501.21t21-51Q552-582 530.79-603t-51-21Q450-624 429-602.79t-21 51Q408-522 429.21-501t51 21ZM480-191q119-107 179.5-197T720-549q0-105-68.5-174T480-792q-103 0-171.5 69T240-549q0 71 60.5 161T480-191Zm0 95Q323.03-227.11 245.51-339.55 168-452 168-549q0-134 89-224.5T479.5-864q133.5 0 223 90.5T792-549q0 97-77 209T480-96Zm0-456Z"/></svg> Thanjavur, Tamilnadu, India</p>
                </div>
                <div className="col-12" data-aos="fade-up">
                    <p> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="M168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm312-240L168-611v347h624v-347L480-432Zm0-85 312-179H168l312 179Zm-312-94v-85 432-347Z"/></svg> msselectronic57@gmail.com</p>
                </div>
                 <div className="col-12" data-aos="fade-up">
                    <a href="https://youtube.col/@eshwarelectrotech"> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="M613-266q-26.4 1-50.36 1.5t-42.54.5H480q-67.95 0-127.28-2-50.72-2-100.22-5t-72.03-9Q155-287 137-304.5t-25-42.44Q106-369 103-400q-3-31-5-60-2-33-2-68t2-68q2-29 5-60t9-53.06q7-24.94 25-42.44 18-17.5 43.47-24.5 22.53-6 72.05-9.11Q302.04-788.22 353-790q59.36-2 127.33-2t127.32 2q50.74 1.78 100.05 4.89Q757-782 779.53-776 805-769 823-751.5t25 42.44q6 22.06 9 53.06 3 31 5 60 2 33 2 68v14q-17.1-6.59-35.1-10.29-18-3.71-36.9-3.71-79.68 0-135.84 56.16T600-336q0 18 3.5 35.5T613-266ZM404-415l200-113-200-113v226Zm352 199v-84h-84v-72h84v-84h72v84h84v72h-84v84h-72Z"/></svg> @eshwarelectrotech</a>
                 </div>
                <div className="col-12" data-aos="fade-up">
                    <a href="https://soundharesh.netlify.app"> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z"/></svg> website</a>
                </div>
                <hr className='mt-3' />
                <div className="col-12" data-aos="fade-up">
                    <h5>Achievements</h5>
                </div>
                  <div className="col-12 mt-3" data-aos="fade-up">
                    <img src={pull} alt="" width={70} />
                  </div>
                  <div className="col-12" data-aos="fade-up">
                    <p className='text-secondary' >block or Report</p>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Profile