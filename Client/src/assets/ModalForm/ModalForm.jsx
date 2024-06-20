// ModalForm.js
import React from 'react';
import axios from 'axios';
import './modalForm.scss'; // Create a separate SCSS file for modal styles

     
const ModalForm = ({ handlegetitems, show,userreview, handleClose ,username,setUsername,setUserreview }) => {
 
    const handlsubmit = async(e)=>{
        e.preventDefault(); // Prevent default form submission behavior

        try {
          const response = await axios.post('https://makaan-builders.onrender.com/services/addServices', {
            name: username,
            review: userreview
          });
          console.log('Review submitted successfully:', response.data);
          handleClose(); // Close the modal after submission
          handlegetitems()
        } catch (error) {
          console.error('There was an error submitting the review:', error);
        }
    }


    // console.log(username,"username",userreview ,"userreview");
  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>Add Review</h2>
        <form>
          <label htmlFor="username">User Name:</label>
          <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" id="username" name="username" required />
          <label htmlFor="review">Review:</label>
          <textarea onChange={(e)=>setUserreview(e.target.value)} value={userreview} id="review" name="review" required></textarea>
          <button onClick={handlsubmit} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
