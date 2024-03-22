import React, { useState } from 'react';
import ScrollRevealSection from "../ScrollRevealSection/ScrollRevealSection";
import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import './Contact.css'
import MyContext from '../Context/Context';
import Navbar from '../Navbar/Navbar';
import AddressComponent from '../AddressComponent/AddressComponent';
import { FaRegArrowAltCircleDown } from "react-icons/fa";


function Contact(){

  return(

  <MyContext.Consumer>
  {(context) => {
     const { language } = context;
     

     switch (language) {
        case "English":
    
    return(
        <>
        <ScrollRevealSection id={"Contact1"} height={"100vh"} url={"https://i.postimg.cc/LsSjYWZz/1000248684-01.jpg"} >
        <Navbar />

            <div className="Contact-Container">
            <div className="center-heading"><h1 className="Contact-Head">Contact Us</h1></div>
                <div className="end-heading" > <h5  style={{fontSize:"17px",color:"#000",width:"auto"}}>Swipe</h5><FaRegArrowAltCircleDown style={{fontSize:"20px",color:"#000"}}/></div>

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
    );
    case "Telugu":
      return(
        <>
        <ScrollRevealSection id={"Contact1"} height={"100vh"} url={"https://i.postimg.cc/LsSjYWZz/1000248684-01.jpg"} >
        <Navbar />

            <div className="Contact-Container">
            <div className="center-heading"><h1 className="Contact-Head" style={{fontSize:"20px"}}>మమ్మల్ని సంప్రదించండి</h1></div>
                <div className="end-heading"> <h5  style={{fontSize:"17px",color:"#000",width:"auto"}}>Swipe</h5><FaRegArrowAltCircleDown style={{fontSize:"20px",color:"#000"}}/></div>

          </div>
        </ScrollRevealSection>
        <ScrollRevealSection id={"Contact2"} height={"40vh"} backgroundColor={"#E9F9EE"}>
            <div className="Find-Us">
                <h1 className="Find-Us-Head" style={{marginBottom:"10px"}}>ఫైండ్ అస్</h1>
                <div className="Contact-Icons-Container">
                <div className="Address-Icons" ><MdOutlineMail className="Contact-Icons"/><p>rythuvaaradhisolutions@gmail.com</p></div>
                          <div className="Address-Icons"><IoCall className="Contact-Icons"/><p>+916303863532</p></div>
                          <div className="Address-Icons2"> <FaLocationDot className="Contact-Icons" /><p>Suraram, Mahadevpur, Jayashankar Bhupalpally</p></div>

                </div>
            </div>

        </ScrollRevealSection>
        <ScrollRevealSection id={"Contact3"} height={"35vh"} backgroundColor={"#E9F9EE"}>
          <div className="ConnectUsContainer">
        <h1 className="Find-Us-Head">మాతో సంప్రదించండి</h1>
        
                <p className="Any-Questions">ఏమైనా ప్రశ్న?</p>
                <h1 className="SendUs">మాకు సందేశం పంపండి</h1>
                <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff"}}> <button type="submit" className="Submit-Button">సందేశం పంపండి</button></a>

                      </div>
    </ScrollRevealSection>
        <AddressComponent />
        </>
      );
    }}}
    </MyContext.Consumer>
    )
}

export default  Contact
