import React, { useState } from 'react';
import ScrollRevealSection from "../ScrollRevealSection/ScrollRevealSection";
import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Axios from 'axios';
import './Contact.css'
import Navbar from '../Navbar/Navbar';
import AddressComponent from '../AddressComponent/AddressComponent';

function Contact(){

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
      try{
        const response = await Axios.post("http://localhost:3007/message", formData)
        
         setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          message: ''
        })

         window.alert(response.data)

      }catch(e){
             window.alert(e.message)
      }
        
      };
    return(
        <>
        <ScrollRevealSection id={"Contact1"} height={"100vh"} url={"https://i.postimg.cc/LsSjYWZz/1000248684-01.jpg"} >
        <Navbar />

            <div className="Contact-Container">
                <h1 className="Contact-Head">Contact Us</h1>
          </div>
        </ScrollRevealSection>
        <ScrollRevealSection id={"Contact2"} height={"40vh"} backgroundColor={"#E9F9EE"}>
            <div className="Find-Us">
                <h1 className="Find-Us-Head">Find Us</h1>
                <div className="Contact-Icons-Container">
                <div className="Address-Icons" ><MdOutlineMail className="Contact-Icons"/><p>rythuvaaradhisolutions@gmail.com</p></div>
                          <div className="Address-Icons"><IoCall className="Contact-Icons"/><p>+916303863532</p></div>
                          <div className="Address-Icons2"> <FaLocationDot className="Contact-Icons" /><p>Suraram, Mahadevpur, Jayashankar Bhupalpally</p></div>

                </div>
            </div>

        </ScrollRevealSection>
        <ScrollRevealSection id={"Contact3"} height={"35vh"} backgroundColor={"#E9F9EE"}>
          <div className="ConnectUsContainer">
        <h1 className="Find-Us-Head">Connect With Us</h1>
        
                <p className="Any-Questions">Any Question ?</p>
                <h1 className="SendUs">Send Us a Message</h1>
                <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff"}}> <button type="submit" className="Submit-Button">Send Message</button></a>

                      </div>
    </ScrollRevealSection>
        <AddressComponent />
        </>
    )
}

export default  Contact


{/* <div className="Form-Container">
                <form onSubmit={handleSubmit} className="contact-form">
                
     
        
         <div className="Label-Container">
        <label htmlFor='fullName' >Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder=' Full Name'
            required
          />
        </div>

        
      

      
        <div className="Label-Container">
        <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder=' Email:'
          />
        </div>

        <div className="Label-Container">
        <label htmlFor='phoneNumber' >Phone:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder=' Phone Numbber'
          />
        </div>
      

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

    <br />
  
    </form></div>*/}