import React, { useState } from "react";
import './section4.scss'
import Aos from "aos";
import axios from 'axios';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { AvatarGenerator } from 'random-avatar-generator';

import ModalForm from "../../ModalForm/ModalForm";


export const Section4 = () => {
  useEffect(() => {
    Aos.init({duration : '2000'})
   },[])
   
   useEffect(() => {
    handlegetitems()
   }, [])
   
   const avatarGenerator = new AvatarGenerator();

   const handlegetitems= async()=>{
    const response = await axios.get('https://makaan-builders--eight.vercel.app/services/getServices')
    console.log(response.data,"res");
    setdata(response.data)
  }

  const [modalShow, setModalShow] = useState(false);
  const [username,setUsername] = useState('')
  const [userreview,setUserreview] = useState('')
  const [data,setdata] =useState([])

  const handleOpen = () => setModalShow(true);
  const handleClose = () => {
    setModalShow(false)
    setUsername("")
    setUserreview("")

  }

  return (
    <>
    <div className="main-h2">
    <h1 className="customer "  data-aos="fade-up">CUSTOMER REVIEW</h1>
      <div className="reviw-container">
     
     

     {data.map((data,index)=>(
      <div key={index} className="inner-reviw " data-aos="fade-up" >
          <div className="inner-card">
            <div><img src={avatarGenerator.generateRandomAvatar()} alt=""  /></div>
             <p>{data.name}</p>
          </div>
            <h4>{data.review}</h4>
        </div>

     ))
     }
        

      
       
        
      </div>
      <div className="customer"  data-aos="fade-up">
          <button onClick={handleOpen}> Add Review </button>
        </div>
    <div className="sec4h1" data-aos="fade-up">
        <h1  >ABOUT US</h1>
      </div>
    </div>
     
      <div className="inside-about">
        <div className="p" data-aos="fade-up">
          <p>
          In the captivating area of Al Karma, Dubai, our dedicated team operates from the heart of the community, identified by the distinguished PIN 122002. Within this picturesque locale, we channel our passion for innovation and expertise to craft exceptional digital solutions. From software development to app creation, we specialize in bringing ideas to life, pushing the boundaries of technology to deliver cutting-edge products. Thank you for choosing us to embark on this journey of innovation in Dubai. We're thrilled to collaborate with you and build remarkable solutions together.
          </p>
        </div>
        <div className="img" data-aos="fade-up">
          <img src="aboutus.jpg" alt="" />
        </div>
      </div>
      <ModalForm handlegetitems={handlegetitems} show={modalShow} handleClose={handleClose} setUsername={setUsername} setUserreview={setUserreview} userreview={userreview} username={username} />
    </>
  );
};
