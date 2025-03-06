
import { useRef } from 'react'
import './Section2.css'
import Svg from './Svg.jsx'

const Section2 = () => {
   
    const dropdownref1 = useRef(null);
    const dropdownref2 =useRef(null);
    const dropdownref3 =useRef(null);
    const dropdownref4 =useRef(null);
    const dropdownref5 =useRef(null);
    const dropdownref6 =useRef(null);

    const togglebtn1 = () =>{
        if(dropdownref1.current.classList.contains('hidden')){
            dropdownref1.current.classList.remove('hidden')
            dropdownref1.current.classList.add('visible')
        }else{
            dropdownref1.current.classList.remove('visible')
            dropdownref1.current.classList.add('hidden')
        }}
    const togglebtn2 = () =>{
        if(dropdownref2.current.classList.contains('hidden')){
            dropdownref2.current.classList.remove('hidden')
            dropdownref2.current.classList.add('visible')
        }else{
            dropdownref2.current.classList.remove('visible')
            dropdownref2.current.classList.add('hidden')
        } }
    const togglebtn3 = () =>{
        if(dropdownref3.current.classList.contains('hidden')){
            dropdownref3.current.classList.remove('hidden')
            dropdownref3.current.classList.add('visible')
        }else{
            dropdownref3.current.classList.remove('visible')
            dropdownref3.current.classList.add('hidden')
        }}
        const togglebtn4 = () =>{
            if(dropdownref4.current.classList.contains('hidden')){
                dropdownref4.current.classList.remove('hidden')
                dropdownref4.current.classList.add('visible')
            }else{
                dropdownref4.current.classList.remove('visible')
                dropdownref4.current.classList.add('hidden')
            }}
            const togglebtn5 = () =>{
                if(dropdownref5.current.classList.contains('hidden')){
                    dropdownref5.current.classList.remove('hidden')
                    dropdownref5.current.classList.add('visible')
                }else{
                    dropdownref5.current.classList.remove('visible')
                    dropdownref5.current.classList.add('hidden')
                }}
                const togglebtn6 = () =>{
                    if(dropdownref6.current.classList.contains('hidden')){
                        dropdownref6.current.classList.remove('hidden')
                        dropdownref6.current.classList.add('visible')
                    }else{
                        dropdownref6.current.classList.remove('visible')
                        dropdownref6.current.classList.add('hidden')
                    }}


   
  return (
    <div>
        <div className="container mt-5 section2">
            <div className="row">

                <div className="col-12">
                    <h3 className='text-white'>Frequently Asked Questions</h3>
                </div>

                <div className="col-12 mt-3 questions" onClick={togglebtn1} >

                    <div className="container">
                        <div className="row">
                            <div className="col-10 sub-title ">
                            <h5 className='text-white' >What is Netflix?</h5>
                            </div>
                            <div className="col-1">
                               <Svg/>
                            </div>
                        </div>
                    </div>
                </div>


                <div ref={dropdownref1} className="col-12 ms-2 text-white answer hidden" >
                    <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                    <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                </div>


                <div className="col-12 mt-3 questions " onClick={togglebtn2}>
                        <div className="container">
                            <div className="row">
                                <div className="col-10 sub-title">
                                <h5 className='text-white' > How much does Netflix cost? </h5>
                                </div>
                                <div className="col-1">
                                  <Svg/>
                                </div>
                            </div>
                        </div>
                </div>


                <div ref={dropdownref2} className="col-12 ms-2 text-white answer hidden" >
                    <p >Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>
                </div>



                <div className="col-12 mt-3 questions" onClick={togglebtn3}>
                  <div className="container">
                    <div className="row">
                        <div className="col-10 sub-title">
                        <h5 className='text-white' > Where can I watch? </h5>
                        </div>
                        <div className="col-1">
                          <Svg/>
                        </div>
                    </div>
                  </div>
                </div>

                <div ref={dropdownref3} className="col-12 ms-2 text-white answer hidden" >
                    <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                    <p>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                </div>

                <div className="col-12 mt-3 questions" onClick={togglebtn4}>
                    <div className="container">
                        <div className="row">
                            <div className="col-10 sub-title">
                            <h5 className='text-white' >How do I cancel?</h5>
                            </div>
                            <div className="col-1">
                                <Svg/>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={dropdownref4} className="col-12 ms-2 text-white answer hidden" >
                    <p >Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                </div>

                
                <div className="col-12 mt-3 questions" onClick={togglebtn5}>
                   <div className="container">
                    <div className="row">
                        <div className="col-10 sub-title">
                        <h5 className='text-white' >What can I watch on Netflix?</h5>
                        </div>
                        <div className="col-1">
                            <Svg/>
                        </div>
                    </div>
                   </div>
                </div>

                
                <div ref={dropdownref5} className="col-12 ms-2 text-white answer hidden" >
                    <p >Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                </div>


                <div className="col-12 mt-3 questions" onClick={togglebtn6}>
                    <div className="container">
                        <div className="row">
                            <div className="col-10 sub-title">
                            <h5 className='text-white' >Is Netflix good for kids?</h5>
                            </div>
                            <div className="col-1">
                                <Svg/>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={dropdownref6} className="col-12 ms-2 text-white answer hidden" >
                    <p >The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
                    <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                </div>


              



            </div>
        </div>
    </div>
  )
}

export default Section2