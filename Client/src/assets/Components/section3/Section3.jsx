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
            <p>3D Design</p>
             <small>At Makaan Builders, our 3D design services bring your construction visions to life with unparalleled realism. Using cutting-edge technology, our expert designers create detailed, lifelike models for you to visualize every aspect of your project. From concept to completion, our 3D designs ensure a clear understanding of your space, facilitating informed decisions and adjustments.</small>
        </div>
      </div>
      <div className='serviceinner-div' data-aos="fade-up">
        <div>
            <img src="webapp.jpg" alt="" />
        </div>
        <div>
            <p>Exterior Design</p>
             <small>Our exterior design services at Makaan Builders focus on creating visually stunning and functional facades that reflect your unique style and requirements. We prioritize curb appeal and durability, collaborating closely with you to select materials, colors, and architectural elements that ensure your building stands out and withstands environmental factors over time.</small>
        </div>
      </div>
      <div className='serviceinner-div' data-aos="fade-up">
        <div>
            <img src="uiapp.png" alt="" />
        </div>
        <div>
            <p>Interior Design</p>
             <small>Transform your interiors with Makaan Builders' exceptional interior design services. Our talented designers specialize in creating beautiful, functional spaces tailored to your tastes and lifestyle. From selecting the perfect color palette and furnishings to optimizing space and lighting, we meticulously handle every detail, ensuring an inviting environment that exceeds your expectations.</small>
        </div>
      </div>
      <div className='serviceinner-div' data-aos="fade-up">
        <div>
            <img src="cutom.jpg" alt="" />
        </div>
        <div>
            <p>Plan</p>
             <small>At Makaan Builders, every successful construction project begins with a comprehensive plan covering all aspects from concept to execution. Our meticulous approach ensures all structural, aesthetic, and practical elements are considered, creating a clear roadmap that minimizes delays and maximizes efficiency.

</small>
        </div>
      </div>
      <div className='serviceinner-div' data-aos="fade-up">
        <div>
            <img src="esti.jpg" alt="" />
        </div>
        <div>
            <p>Estimation</p>
             <small>
             Accurate cost estimation is crucial for construction project success. Makaan Builders offers precise, transparent estimation services with detailed cost breakdowns. Our experienced estimators cover materials, labor, permits, and contingencies, ensuring clarity for effective budget planning.
</small>
        </div>
      </div>
      <div className='serviceinner-div' data-aos="fade-up">
        <div>
            <img src="contract.jpg" alt="" />
        </div>
        <div>
            <p>Contract</p>
             <small>
             Makaan Builders takes pride in our comprehensive contract services, ensuring smooth and professional execution of your construction project. Our contracts clearly define scope, timelines, costs, and responsibilities, offering peace of mind and project protection. We prioritize transparency, accountability, and high standards, ensuring all parties are aligned for optimal project outcomes.
             </small>
        </div>
      </div>
    
        
      

    
      
    </div>
    </>
  )
}
