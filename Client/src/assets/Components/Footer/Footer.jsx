import React, { useEffect } from 'react'
import './footer.scss'
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css';
export const Footer = () => {
    useEffect(() => {
        Aos.init({duration : '2000'})
       },[])
  return (
 <>
 <div className='main-fdiv'>
    <div  data-aos="zoom-in" className='inf'>
        <img src="logo.png" alt="" />
        <span>MAKAAN BUILDERS</span>
    </div>
 </div>
 <div className='f2' data-aos="fade-up">
    <p>😊Thank you for visiting our site! As a team of passionate constructors, we're thrilled to have you here. Your interest in our skills and projects means the world to us. We're committed to providing you with top-notch service and a seamless experience. Let's construct something extraordinary together!</p>
 
 </div>
 <div className='f3'>
        {/* <a className='logo' href=""><FaFacebook /></a>
        <a  className='logo' href="">< GrInstagram/></a> */}
        <a className='logo' href="https://www.facebook.com/makaanbuilders/"><FaFacebook /></a>
        <a className='logo' href="https://www.instagram.com/makaanbuilders?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><GrInstagram/></a>
        <a className='logo' href="">< FaSquareXTwitter/></a>
        <a className='logo' href=""><FaLinkedin /></a>
    </div>
 </>
  )
}
