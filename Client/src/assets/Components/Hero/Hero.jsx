import React from 'react'
import './hero.scss'

export const Hero = () => {
  const scrollToNextSection = () => {
    // Find the next section element
    const nextSection = document.querySelector('.section2');

    // Scroll to the next section smoothly
    nextSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='hero-div'>
        <div className='hero-img' >
            <img src="hero.png" alt="" />
        </div>
        <div className='slogan '>
            <h2>“ THINK IT, DREAM IT, WE'LL BUILD IT ”</h2>
          <p>we are experienced developers dedicated to bringing your app ideas to life.</p>
        </div>
        <div className='btn1'>
            <button onClick={scrollToNextSection} >View More</button>
        </div>
      
    </div>
  )
}
