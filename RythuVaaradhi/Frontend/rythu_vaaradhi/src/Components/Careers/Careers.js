import React from 'react';
import Navbar from '../Navbar/Navbar';
import AddressComponent from '../AddressComponent/AddressComponent';
import './Careers.css';
import MyContext from '../Context/Context';

import { FaRegArrowAltCircleDown } from "react-icons/fa";


const Careers = () => {

   return (
      <MyContext.Consumer>
         {(context) => {
            const { language } = context;
            

            switch (language) {
               case "English":
                  
            return (
               <>
                  <div className="Career">
                     <Navbar />
                     <div className="Career-Head">
                     <div className="center-heading"><h1 style={{fontSize:"35px",fontFamily:"Roboto",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.5)",color:"#ffffff"}}>Join Us</h1></div>
                  <div className="end-heading" style={{paddingBottom:"10px"}}> <h5  style={{fontSize:"17px",color:"#fff"}}>Scroll</h5><FaRegArrowAltCircleDown style={{fontSize:"20px",color:"#fff"}}/></div>

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
                  
                  break;
               case "Telugu":
               
                return (
               <>
                  <div className="Career">
                     <Navbar />
                     <div className="Career-Head">
                     <div className="center-heading"><h1 style={{fontSize:"33px",fontFamily:"Roboto",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.5)",color:"#ffffff"}}>మాతో చేరండి</h1></div>
                     <div className="end-heading" style={{paddingBottom:"10px"}}> <h5  style={{fontSize:"17px",color:"#fff"}}>Scroll</h5><FaRegArrowAltCircleDown style={{fontSize:"20px",color:"#fff"}}/></div>

                     </div>
                    
                    
                  </div>
                  <div className="WorkWithUs">
                        <h2 className="WorkWithUsHead">మాతో పని చేయాలనుకుంటున్నారా?</h2>
                       
                        <div className="LabourWork">
                        <h3 style={{marginBottom:"3px"}}>మీరు రోజువారీ కూలీ పని కోసం చూస్తున్న వ్యవసాయ కార్మికులా?</h3>
                        <div><p style={{marginBottom:"3px"}}>ఇక చూడకండి! మా బృందంలో చేరండి మరియు వ్యవసాయ ఉత్పాదకత మరియు స్థిరత్వాన్ని పెంపొందించడానికి అంకితమైన డైనమిక్ వర్క్‌ఫోర్స్‌లో భాగం అవ్వండి. మాతో రోజువారీ చెల్లింపు పొందండి.</p>
                        <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="JoinButton">Join Us</button></a>
                        </div>
                        </div>
                        <div className="LabourWork">
                        <h3 style={{marginBottom:"3px"}}>మీరు వెటర్నరీ వైద్యులా?</h3>
                        <div><p style={{marginBottom:"3px"}}>రైతు వారధి మా బృందంలో చేరండి మరియు వెటర్నరీ డాక్టర్లతో రైతులను కనెక్ట్ చేసే అద్భుతమైన ప్రయత్నంలో భాగం అవ్వండి. మాతో వెటర్నరీ డాక్టర్‌గా, మీరు నేరుగా జంతు సంక్షేమాన్ని ప్రభావితం చేసే మరియు వ్యవసాయ సంఘాలకు మద్దతు ఇచ్చే అవకాశాన్ని పొందుతారు. వ్యవసాయ పశువైద్య సంరక్షణలో విప్లవాత్మకమైన మా మిషన్‌లో చేరడానికి ఇప్పుడే దరఖాస్తు చేసుకోండి.</p>
                        <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="JoinButton">Join Us</button></a></div>
                        </div>
                        <div className="LabourWork">
                        <h3 style={{marginBottom:"3px"}}>మీరు ఎలక్ట్రీషియన్/మెకానిక్?</h3>
                        <div><p style={{marginBottom:"3px"}}>రైతు వారధి మా బృందంలో చేరండి మరియు ఎలక్ట్రీషియన్‌లను వ్యవసాయ ప్రాజెక్టులతో అనుసంధానించే వినూత్న చొరవలో భాగం అవ్వండి. మాతో ఎలక్ట్రీషియన్‌గా, మీరు పొలాల్లో విద్యుత్ అవసరాలను పరిష్కరించడంలో కీలక పాత్ర పోషిస్తారు, సామర్థ్యం మరియు ఉత్పాదకతను పెంచడానికి దోహదపడతారు. సాంకేతికత ద్వారా వ్యవసాయాన్ని విప్లవాత్మకంగా మార్చే మా మిషన్‌లో చేరడానికి ఇప్పుడే దరఖాస్తు చేసుకోండి.</p>
                        <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="JoinButton">Join Us</button></a></div>
                        </div>
                        <div className="LabourWork">
                        <h3 style={{marginBottom:"3px"}}>మాతో కలిసి పనిచేసేందుకు గ్రామ ప్రతినిధుల కోసం చూస్తున్నాం</h3>
                        <div><p style={{marginBottom:"3px"}}>రైతువారాధి మా బృందంలో చేరండి మరియు గ్రామీణ ప్రాంతాల్లోని రైతులకు పశువులను కొనుగోలు చేయడం మరియు విక్రయించడం సులభతరం చేయడం ద్వారా ఒక ముఖ్యమైన గ్రామ ప్రతినిధి అవ్వండి. ప్రతినిధిగా, రైతులను మా ప్లాట్‌ఫారమ్‌తో కనెక్ట్ చేయడంలో మీరు కీలక పాత్ర పోషిస్తారు
  భారం లేని లావాదేవీలు మరియు సమాజ నిశ్చితార్థాన్ని పెంపొందించడం. గ్రామీణ వ్యవసాయ కమ్యూనిటీలను శక్తివంతం చేయడానికి మరియు వ్యవసాయ ప్రకృతి దృశ్యాన్ని విప్లవాత్మకంగా మార్చడానికి మా మిషన్‌లో భాగం కావడానికి ఇప్పుడే దరఖాస్తు చేసుకోండి.</p>
                        <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="JoinButton">Join Us</button></a></div>
                        </div>
                     </div>
                  <AddressComponent />
               </>
            );
            break;
            default :
                return(
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
                  
                
            }

         }}
      </MyContext.Consumer>
   );
};

export default Careers;
