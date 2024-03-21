import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import AddressComponent from '../AddressComponent/AddressComponent';
import './Careers.css';
import MyContext from '../Context/Context';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

const Careers = () => {
   const [color, setColor] = useState("black");

   useEffect(() => {
      const intervalId = setInterval(() => {
         setColor((prevColor) => (prevColor === "black" ? "red" : "black"));
      }, 500);

      return () => clearInterval(intervalId);
   }, []);

   return (
      <MyContext.Consumer>
         {(context) => {
            const { language } = context;
            let content;

            switch (language) {
               case "English":
                  
                  content = <h1>Coming Soon</h1>;
                  break;
               case "Telugu":
               
                  content = <h1>త్వరలో  రానున్నది</h1>;
                  break;
               default:
                  content = <h1>Coming Soon</h1>;
            }

            return (
               <>
                  <div className="Career">
                     <Navbar />
                     <div className="Career-Head">
                     <h1 style={{fontSize:"50px",fontFamily:"Roboto",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.5)",color:"#229954"}}>Join Us</h1>
                     
                     </div>
                    
                    
                  </div>
                  <div className="WorkWithUs">
                        <h2 className="WorkWithUsHead">Want to work with us ?</h2>
                       
                        <div className="LabourWork">
                        <h3 style={{marginBottom:"3px"}}>Are you an agricultural worker looking for daily wage work?</h3>
                        <div><p style={{marginBottom:"3px"}}>Look no further! Join our team and be part of a dynamic workforce dedicated to enhancing agricultural productivity and sustainability. Get paid daily with us.</p>
                        <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="JoinButton">Join Us</button></a>
                        </div>
                        </div>
                        <div className="LabourWork">
                        <h3 style={{marginBottom:"3px"}}>Are you a Veterinary Doctor?</h3>
                        <div><p style={{marginBottom:"3px"}}>Join our team at RythuVaaradhi and be part of a groundbreaking effort to connect farmers with veterinary doctors. As a veterinary doctor with us, you'll have the opportunity to directly impact animal welfare and support farming communities. Apply now to join our mission of revolutionizing agricultural veterinary care.</p>
                        <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="JoinButton">Join Us</button></a></div>
                        </div>
                        <div className="LabourWork">
                        <h3 style={{marginBottom:"3px"}}>Are you a Electrician/Mechanic?</h3>
                        <div><p style={{marginBottom:"3px"}}>Join our team at RythuVaaradhi and be part of an innovative initiative to connect electricians with agricultural projects. As an electrician with us, you'll play a crucial role in solving electrical needs on farms, contributing to increased efficiency and productivity. Apply now to join our mission of revolutionizing agriculture through technology and skilled labor.</p>
                        <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="JoinButton">Join Us</button></a></div>
                        </div>
                        <div className="LabourWork">
                        <h3 style={{marginBottom:"3px"}}>Looking for Village Representatives?</h3>
                        <div><p style={{marginBottom:"3px"}}>Join our team at Rythuvaaradhi and become a vital Village Representative, facilitating the buying and selling of cattle for farmers in rural areas. As a representative, you'll play a key role in connecting farmers with our platform, ensuring seamless transactions and fostering community engagement. Apply now to be part of our mission to empower rural farming communities and revolutionize the agricultural landscape.</p>
                        <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="JoinButton">Join Us</button></a></div>
                        </div>
                     </div>
                  <AddressComponent />
               </>
            );
         }}
      </MyContext.Consumer>
   );
};

export default Careers;
