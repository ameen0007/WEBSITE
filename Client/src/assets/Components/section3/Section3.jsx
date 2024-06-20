import React, { useEffect } from 'react'
import './section.scss'
import Aos from "aos";
import 'aos/dist/aos.css';
export const Section3 = () => {
    useEffect(() => {
        Aos.init({duration : '1000'})
       },[])
       
  return (
    <>
    <div className='main-h1'>
    <div className='h1' >  
       <h1>OUR SERVICES</h1>
       </div>
    </div>
     
       
   
    <div className='service-main-div'>
      <div className='serviceinner-div ' data-aos="fade-up">
        <div>
            <img src="mobileapp.png" alt="" />
        </div>
        <div>
            <p>Mobile App Development</p>
             <small>Designed And Developed User-Friendly Mobile Applications That Enhanced Customer Engagement And Delivered A Seamless User Experience.</small>
        </div>
      </div>
      <div className='serviceinner-div' data-aos="fade-up">
        <div>
            <img src="webapp.png" alt="" />
        </div>
        <div>
            <p>Web Development</p>
             <small>Provided High-Quality Web Development Services, Creating Responsive And Visually Appealing Websites For The Client's Target Audience.</small>
        </div>
      </div>
      <div className='serviceinner-div' data-aos="fade-up">
        <div>
            <img src="uiapp.png" alt="" />
        </div>
        <div>
            <p>UI/UX Designing</p>
             <small>With a keen eye for detail and a deep understanding of user psychology, we create UI/UX designs that resonate with users on an emotional level, fostering long-lasting connections with your brand.</small>
        </div>
      </div>
      <div className='serviceinner-div' data-aos="fade-up">
        <div>
            <img src="cutom.jpg" alt="" />
        </div>
        <div>
            <p>Customized Software Solutions</p>
             <small>Developed Custom Software Solutions Tailored To The Client's Specific Business Needs, Leading To Increased Efficiency And Productivity.</small>
        </div>
      </div>
      <div className='serviceinner-div' data-aos="fade-up">
        <div>
            <img src="ecommerce.jpg" alt="" />
        </div>
        <div>
            <p>E-commerce Platform Development</p>
             <small>
Built Secure And Scalable E-commerce Platforms, Enabling The Client To Expand Their Online Presence And Drive Sales Growth</small>
        </div>
      </div>
      <div className='serviceinner-div' data-aos="fade-up">
        <div>
            <img src="Software_integration.jpg.png" alt="" />
        </div>
        <div>
            <p>Software Integration Solutions</p>
             <small>
        Implemented Seamless Software Integration Solutions To Streamline Business Processes And Optimize Operational Efficiency.</small>
        </div>
      </div>
      <div className='serviceinner-div' data-aos="fade-up">
        <div>
            <img src="Custom-API.png" alt="" />
        </div>
        <div>
            <p>Custom API Development</p>
             <small>Developed Custom API Solutions To Facilitate Data Sharing And System Integration, Improving Overall Business Functionality.</small>
        </div>
      </div>
        
      

    
      
    </div>
    </>
  )
}
