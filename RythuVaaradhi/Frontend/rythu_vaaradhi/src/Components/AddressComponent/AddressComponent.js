import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import './AddressComponent.css'


function AddressComponent(){
   return(
    <div className="AddressComponent">
    
                 <div className="Home-Bottom-Page">
                        <div id="QuickLinks">
                             <h1>Quick Links</h1>
                             <p style={{margin:"8px 0px"}}>Drone Spraying</p>
<p style={{margin:"8px 0px"}}>AI Soil Testing</p>
<p style={{margin:"8px 0px"}}>Equipment Selling</p>
<p style={{margin:"8px 0px"}}>Transportation and Storage</p>
<p style={{margin:"8px 0px"}}>Tractor and Harvestor Rentals</p>
<p style={{margin:"8px 0px"}}>FPO Model</p>
                        </div>
                        <div className="Address-Card">
                          <h1>Address</h1>
                          <div className="Address-Icons"><MdOutlineMail className="Bottom-Icons"/><p>rythuvaaradhisolutions@gmail.com</p></div>
                          <div className="Address-Icons"><IoCall className="Bottom-Icons"/><p>+916303863532</p></div>
                          <div className="Address-Icons"> <FaLocationDot className="Bottom-Icons" /><p>Suraram, Mahadevpur, Jayashankar Bhupalpally</p></div>
                        </div>
                 </div>
                 <div className="Bottom-Socialmedia">
                    <h3 className="Bottom-Rythu">RythuVaaradhiSolutions</h3>
                    <div className="Social-Icons" style={{width:"40%"}}>
                    <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff"}}> <FaWhatsapp /></a>
                      <a href="https://www.facebook.com/profile.php?id=61555236356293&mibextid=vk8aRt" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff"}}> <FaFacebookF /></a>
                      <a href="https://www.instagram.com/rythuvaaradhiofficial?igsh=MTdkd2FsdGllMXh2dQ==" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff"}}> <FaInstagram /></a>
                  
                     
                      <a href="https://youtube.com/@RYTHUVAARADHISOLUTIONS?si=3IwnT7kNbtHOn948" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff"}}><FaYoutube /></a>
                      <a href="https://www.linkedin.com/company/rythuvaaradhisolutions/" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff"}}><FaLinkedinIn /></a>
                    </div>
                 </div>
      
    </div>
   )
   }

   export default AddressComponent