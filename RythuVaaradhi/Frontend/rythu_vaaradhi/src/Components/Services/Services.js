import AddressComponent from "../AddressComponent/AddressComponent"
import Navbar from "../Navbar/Navbar"
import ScrollRevealSection from "../ScrollRevealSection/ScrollRevealSection"
import MyContext from '../Context/Context';
import './Services.css'

function Services(){


    return(
        <MyContext.Consumer>
            {
                (context) => {
                    const { language } = context;
                    
        
                    switch (language) {
                       case "English":
                        return(
                            <>
                            <ScrollRevealSection height={"100vh"} backgroundColor={"#E9F9EE"} id={"Service1"}>
                            <Navbar />
                                <div className="Service-Image-Container" >
                                    <img src="https://i.postimg.cc/V6zVj07m/Picsart-24-01-02-13-45-58-095.png" alt="service-image" className="service-image" />
                                    <h1 className="Service-Head">Services</h1>
                                      
                                </div>
                    
                            </ScrollRevealSection>
                            <ScrollRevealSection id={"Service2"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                <h1  className="Service-Head">Our Services</h1>
                                <div className="Services-Container">
                                    <img src="https://i.postimg.cc/446j51d2/DSC-1074.jpg" alt="Drone-Image" className="Service-Images"/>
                                    <div className="Service-Text">
                                        <h1  className="Service-Card-Head">Drone Spraying</h1>
                                        <div className="Service-Para-div"><p  className="Service-Para">Revolutionizing agriculture, our drone spraying service offers precise and efficient applications of fertilizers and pesticides. Covering vast farmlands, it ensures optimal crop health and increased productivity, with a spray time of 7-8 minutes.</p></div>
                                        <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">Book Now</button></a>
                                    </div> </div>
                            </ScrollRevealSection>
                            <ScrollRevealSection id={"Service3"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                <div className="Services-Container">
                                <div className="Service-Text2">
                                        <h1 className="Service-Card-Head">Buy/Sell Cattle</h1>
                                    <div className="Service-Para-div"><p className="Service-Para">Our platform facilitates the seamless buying and selling of cattle. We understand the importance of this transaction for farmers, which is why we've designed our service to be user-friendly and efficient. Whether you're looking to expand your herd or find a new home for your livestock, our platform connects buyers and sellers, ensuring fair deals and smooth transactions. With our easy-to-use interface and dedicated support, buying and selling cattle has never been easier.</p></div>
                                    <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">Book Now</button></a>
                                    </div>
                                    <img src="https://i.postimg.cc/zfxNjmPn/images.jpg" alt="Drone-Image" className="Service-Images"/>
                                     </div>
                            </ScrollRevealSection>
                            <ScrollRevealSection id={"Service4"} backgroundColor={"#E9F9EE"} height={"auto"}>
                              
                                <div className="Services-Container">
                                    <img src="https://i.postimg.cc/mgwmS5CF/images-16.jpg" alt="Drone-Image" className="Service-Images"/>
                                    <div className="Service-Text">
                                        <h1 className="Service-Card-Head">Tractor and Harvester rentals</h1>
                                        <div className="Service-Para-div"><p className="Service-Para">Tractor and harvester rentals offer farmers a flexible and cost-effective solution, allowing them to access essential machinery without the financial burden of ownership. These services provide seasonal adaptability, enabling farmers to scale their operations based on changing needs while avoiding the hassle of maintenance and repairs. With the latest technology at their fingertips, farmers can stay up-to-date without the need for frequent equipment upgrades.</p></div>
                                        <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">Book Now</button></a>
                                    </div> </div>
                            </ScrollRevealSection>
                           {/*} <ScrollRevealSection id={"Service5"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                <div className="Services-Container">
                                <div className="Service-Text2">
                                        <h1 className="Service-Card-Head">Transport & Storage</h1>
                                        <div className="Service-Para-div"><p className="Service-Para">Facilitating the logistics of agriculture, we provide transportation solutions and storage facilities. Ensuring produce reaches the market efficiently and is stored under optimal conditions for extended freshness.</p></div>
                    
                                    <button className="KnowMore-Button">Know More</button>
                                    </div>
                                    <img src="https://i.postimg.cc/13FjT8n2/cold-and-transportation.jpg" alt="Drone-Image" className="Service-Images"/>
                                     </div>
                        </ScrollRevealSection> */}
                            <ScrollRevealSection id={"Service6"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                
                                <div className="Services-Container">
                                    <img src="https://i.postimg.cc/Xq3t737J/images-17.jpg" alt="Drone-Image" className="Service-Images"/>
                                    <div className="Service-Text">
                                        <h1 className="Service-Card-Head">Empowering agriculture workforce:</h1>
                                       <div className="Service-Para-div"><p className="Service-Para">Skilled Labor is at the core of this transformative approach, advocating for increased engagement and training to empower the workforce in adapting to new technological advancements. By fostering a culture of continuous learning and upskilling, Skilled Labor ensures that workers remain competent and proficient in handling cutting-edge agricultural equipment, contributing to increased efficiency on the field.</p></div> 
                    
                                       <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">Book Now</button></a>
                                    </div> </div>
                            </ScrollRevealSection>
                            <ScrollRevealSection id={"Service7"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                <div className="Services-Container">
                                <div className="Service-Text2">
                                        <h1 className="Service-Card-Head">Equipment Selling</h1>
                                        <div className="Service-Para-div"><p className="Service-Para">Facilitating direct equipment transactions between farmers, equipment selling within the farming community offers a decentralized and efficient approach to meet agricultural machinery needs. Farmers engaging in equipment selling transactions benefit from a direct exchange, reducing intermediaries and associated costs. This practice not only provides farmers with access to affordable and well-maintained machinery but also fosters a sense of community support</p></div>
                    
                                        <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">Book Now</button></a>
                                    </div>
                                    <img src="https://i.postimg.cc/m2zMNMKx/farm-tools-names-with-pictures.png" alt="Drone-Image" className="Service-Images"/>
                                     </div>
                            </ScrollRevealSection>
                            {/*<ScrollRevealSection id={"Service8"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                
                                <div className="Services-Container">
                                    <img src="https://i.postimg.cc/d0jDDdJM/fpo-models.jpg" alt="Drone-Image" className="Service-Images"/>
                                    <div className="Service-Text">
                                        <h1 className="Service-Card-Head">FPO Model</h1>
                                        <div className="Service-Para-div"><p className="Service-Para">We collaborate with Farmer Producer Organizations (FPOs) to streamline agricultural processes. This model reduces cultivation costs, enhances productivity, and ensures fair returns for farmers by collectively addressing challenges.</p></div>
                    
                                        <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">Book Now</button></a>
                                    </div> </div>
                        </ScrollRevealSection> */}
                            {/*<ScrollRevealSection id={"Service9"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                <div className="Services-Container">
                                <div className="Service-Text2">
                                        <h1  className="Service-Card-Head">Expert Advice</h1>
                                        <div className="Service-Para-div"><p className="Service-Para">Connect with our agricultural experts, the Crop Doctors, for personalized advice. Whether it's pest management, crop diseases, or general farming queries, our experts provide timely guidance to support farmers in making informed decisions.</p></div>
                    
                                        <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">Book Now</button></a>
                                    </div>
                                    <img src="https://i.postimg.cc/CKxZRg4M/Screenshot-2024-01-03-014206-transformed.png" alt="Drone-Image" className="Service-Images"/>
                                     </div>
                        </ScrollRevealSection> */}
                            <AddressComponent />
                            </>
                        );
                        break;
                        case "Telugu" :
                            return(
                                <>
                                <ScrollRevealSection height={"100vh"} backgroundColor={"#E9F9EE"} id={"Service1"}>
                                <Navbar />
                                    <div className="Service-Image-Container" >
                                        <img src="https://i.postimg.cc/V6zVj07m/Picsart-24-01-02-13-45-58-095.png" alt="service-image" className="service-image" />
                                        <h1 className="Service-Head">సేవలు</h1>
                                          
                                    </div>
                        
                                </ScrollRevealSection>
                                <ScrollRevealSection id={"Service2"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                    <h1  className="Service-Head">మా సేవలు</h1>
                                    <div className="Services-Container">
                                        <img src="https://i.postimg.cc/446j51d2/DSC-1074.jpg" alt="Drone-Image" className="Service-Images"/>
                                        <div className="Service-Text">
                                            <h1  className="Service-Card-Head">డ్రోన్ స్ప్రేయింగ్</h1>
                                            <div className="Service-Para-div"><p  className="Service-Para">వ్యవసాయాన్ని విప్లవాత్మకంగా మారుస్తూ, మా డ్రోన్ స్ప్రేయింగ్ సేవ ఎరువులు మరియు పురుగుమందుల యొక్క ఖచ్చితమైన మరియు సమర్థవంతమైన అప్లికేషన్లను అందిస్తుంది. విస్తారమైన వ్యవసాయ భూములను కవర్ చేయడం, ఇది 7-8 నిమిషాల స్ప్రే సమయంతో సరైన పంట ఆరోగ్యాన్ని మరియు ఉత్పాదకతను పెంచుతుంది.</p></div>
                                            <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">ఆర్డర్ చేయండి</button></a>
                                        </div> </div>
                                </ScrollRevealSection>
                                <ScrollRevealSection id={"Service3"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                    <div className="Services-Container">
                                    <div className="Service-Text2">
                                            <h1 className="Service-Card-Head">పశువులను కొనండి/అమ్మండి</h1>
                                        <div className="Service-Para-div"><p className="Service-Para">మా ప్లాట్‌ఫారమ్ పశువులను సులభంగా కొనుగోలు చేయడానికి మరియు విక్రయించడానికి వీలు కల్పిస్తుంది. రైతుల కోసం ఈ లావాదేవీ యొక్క ప్రాముఖ్యతను మేము అర్థం చేసుకున్నాము, అందుకే మేము మా సేవను వినియోగదారు-స్నేహపూర్వకంగా మరియు సమర్థవంతంగా రూపొందించాము. మీరు మీ మందను విస్తరించాలని చూస్తున్నా లేదా మీ పశువుల కోసం కొత్తదాన్ని కనుగొనాలని చూస్తున్నా, మా ప్లాట్‌ఫారమ్ కొనుగోలుదారులు మరియు అమ్మకందారులను కలుపుతుంది, న్యాయమైన ఒప్పందాలు మరియు సున్నితమైన లావాదేవీలను నిర్ధారిస్తుంది. అంకితమైన మద్దతు, పశువులను కొనుగోలు చేయడం మరియు విక్రయించడం సులభతరం చేస్తుంది.</p></div>
                                        <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">ఆర్డర్ చేయండి</button></a>
                                        </div>
                                        <img src="https://i.postimg.cc/zfxNjmPn/images.jpg" alt="Drone-Image" className="Service-Images"/>
                                         </div>
                                </ScrollRevealSection>
                                <ScrollRevealSection id={"Service4"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                  
                                    <div className="Services-Container">
                                        <img src="https://i.postimg.cc/mgwmS5CF/images-16.jpg" alt="Drone-Image" className="Service-Images"/>
                                        <div className="Service-Text">
                                            <h1 className="Service-Card-Head">ట్రాక్టర్ మరియు హార్వెస్టర్ అద్దెలు</h1>
                                            <div className="Service-Para-div"><p className="Service-Para">ట్రాక్టర్ మరియు హార్వెస్టర్ అద్దెలు రైతులకు సౌకర్యవంతమైన మరియు తక్కువ ఖర్చుతో కూడిన పరిష్కారాన్ని అందిస్తాయి, యాజమాన్యం యొక్క ఆర్థిక భారం లేకుండా అవసరమైన యంత్రాలను యాక్సెస్ చేయడానికి వీలు కల్పిస్తుంది. ఈ సేవలు కాలానుగుణ అనుకూలతను అందిస్తాయి, నిర్వహణ మరియు మరమ్మత్తుల ఇబ్బందులను తప్పించుకుంటూ మారుతున్న అవసరాల ఆధారంగా రైతులు తమ కార్యకలాపాలను స్కేల్ చేసుకునేందుకు వీలు కల్పిస్తాయి. అత్యాధునిక సాంకేతిక పరిజ్ఞానం అందుబాటులోకి రావడంతో రైతులు ఎప్పటికప్పుడు పరికరాలను అప్‌గ్రేడ్ చేయాల్సిన అవసరం లేకుండానే ఎప్పటికప్పుడు అప్‌డేట్‌గా ఉండగలరు.</p></div>
                                            <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">ఆర్డర్ చేయండి</button></a>
                                        </div> </div>
                                </ScrollRevealSection>
                               {/*} <ScrollRevealSection id={"Service5"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                    <div className="Services-Container">
                                    <div className="Service-Text2">
                                            <h1 className="Service-Card-Head">Transport & Storage</h1>
                                            <div className="Service-Para-div"><p className="Service-Para">Facilitating the logistics of agriculture, we provide transportation solutions and storage facilities. Ensuring produce reaches the market efficiently and is stored under optimal conditions for extended freshness.</p></div>
                        
                                        <button className="KnowMore-Button">Know More</button>
                                        </div>
                                        <img src="https://i.postimg.cc/13FjT8n2/cold-and-transportation.jpg" alt="Drone-Image" className="Service-Images"/>
                                         </div>
                            </ScrollRevealSection> */}
                                <ScrollRevealSection id={"Service6"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                    
                                    <div className="Services-Container">
                                        <img src="https://i.postimg.cc/Xq3t737J/images-17.jpg" alt="Drone-Image" className="Service-Images"/>
                                        <div className="Service-Text">
                                            <h1 className="Service-Card-Head">వ్యవసాయ కులీలు:</h1>
                                           <div className="Service-Para-div"><p className="Service-Para">వ్యవసాయ కార్మికులు అనేది వ్యవసాయ విధానం యొక్క ప్రధాన అంశం, మా ప్లాట్‌ఫారమ్‌తో రైతులకు సులభతరం చేయడం మరియు మా ప్లాట్‌ఫారమ్‌తో రైతులకు సులభతరం చేయడం మరియు సంస్కృతిని నేర్చుకోవడం మరియు నైపుణ్యాన్ని పెంపొందించడం ద్వారా, వ్యవసాయ కార్మికులు సమర్థులు మరియు నైపుణ్యం కలిగి ఉంటారు.</p></div> 
                        
                                           <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">ఆర్డర్ చేయండి</button></a>
                                        </div> </div>
                                </ScrollRevealSection>
                                <ScrollRevealSection id={"Service7"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                    <div className="Services-Container">
                                    <div className="Service-Text2">
                                            <h1 className="Service-Card-Head">వ్యవసాయ పరికరాలు అమ్మడం/కొనడం</h1>
                                            <div className="Service-Para-div"><p className="Service-Para">రైతుల మధ్య నేరుగా పరికరాల లావాదేవీలను సులభతరం చేయడం, వ్యవసాయ యంత్రాల అవసరాలను తీర్చడానికి వికేంద్రీకృత మరియు సమర్థవంతమైన విధానాన్ని వ్యవసాయ సమాజంలో విక్రయించే పరికరాలను అందిస్తుంది. పరికరాలు విక్రయించే లావాదేవీలలో నిమగ్నమైన రైతులు ప్రత్యక్ష మార్పిడి, మధ్యవర్తులు మరియు సంబంధిత ఖర్చులను తగ్గించడం ద్వారా ప్రయోజనం పొందుతారు. ఈ అభ్యాసం రైతులకు సరసమైన మరియు చక్కగా నిర్వహించబడే యంత్రాలకు ప్రాప్యతను అందించడమే కాకుండా సమాజ మద్దతు యొక్క భావాన్ని పెంపొందిస్తుంది.</p></div>
                        
                                            <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">ఆర్డర్ చేయండి</button></a>
                                        </div>
                                        <img src="https://i.postimg.cc/m2zMNMKx/farm-tools-names-with-pictures.png" alt="Drone-Image" className="Service-Images"/>
                                         </div>
                                </ScrollRevealSection>
                                {/*<ScrollRevealSection id={"Service8"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                    
                                    <div className="Services-Container">
                                        <img src="https://i.postimg.cc/d0jDDdJM/fpo-models.jpg" alt="Drone-Image" className="Service-Images"/>
                                        <div className="Service-Text">
                                            <h1 className="Service-Card-Head">FPO Model</h1>
                                            <div className="Service-Para-div"><p className="Service-Para">We collaborate with Farmer Producer Organizations (FPOs) to streamline agricultural processes. This model reduces cultivation costs, enhances productivity, and ensures fair returns for farmers by collectively addressing challenges.</p></div>
                        
                                            <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">Book Now</button></a>
                                        </div> </div>
                            </ScrollRevealSection> */}
                                {/*<ScrollRevealSection id={"Service9"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                    <div className="Services-Container">
                                    <div className="Service-Text2">
                                            <h1  className="Service-Card-Head">Expert Advice</h1>
                                            <div className="Service-Para-div"><p className="Service-Para">Connect with our agricultural experts, the Crop Doctors, for personalized advice. Whether it's pest management, crop diseases, or general farming queries, our experts provide timely guidance to support farmers in making informed decisions.</p></div>
                        
                                            <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">Book Now</button></a>
                                        </div>
                                        <img src="https://i.postimg.cc/CKxZRg4M/Screenshot-2024-01-03-014206-transformed.png" alt="Drone-Image" className="Service-Images"/>
                                         </div>
                            </ScrollRevealSection> */}
                                <AddressComponent />
                                </>
                            
                            );
                            break ;
                        default :
                          return(
                        
                                <>
                                <ScrollRevealSection height={"100vh"} backgroundColor={"#E9F9EE"} id={"Service1"}>
                                <Navbar />
                                    <div className="Service-Image-Container" >
                                        <img src="https://i.postimg.cc/V6zVj07m/Picsart-24-01-02-13-45-58-095.png" alt="service-image" className="service-image" />
                                        <h1 className="Service-Head">Services</h1>
                                          
                                    </div>
                        
                                </ScrollRevealSection>
                                <ScrollRevealSection id={"Service2"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                    <h1  className="Service-Head">Our Services</h1>
                                    <div className="Services-Container">
                                        <img src="https://i.postimg.cc/446j51d2/DSC-1074.jpg" alt="Drone-Image" className="Service-Images"/>
                                        <div className="Service-Text">
                                            <h1  className="Service-Card-Head">Drone Spraying</h1>
                                            <div className="Service-Para-div"><p  className="Service-Para">Revolutionizing agriculture, our drone spraying service offers precise and efficient applications of fertilizers and pesticides. Covering vast farmlands, it ensures optimal crop health and increased productivity, with a spray time of 7-8 minutes.</p></div>
                                            <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">Book Now</button></a>
                                        </div> </div>
                                </ScrollRevealSection>
                                <ScrollRevealSection id={"Service3"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                    <div className="Services-Container">
                                    <div className="Service-Text2">
                                            <h1 className="Service-Card-Head">Buy/Sell Cattle</h1>
                                        <div className="Service-Para-div"><p className="Service-Para">Our AI-enabled soil testing provides quick and accurate results within 90 seconds. Analyzing soil health, it offers detailed reports and smart testing recommendations, enabling farmers to make informed decisions for better yields.</p></div>
                                        <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">Book Now</button></a>
                                        </div>
                                        <img src="https://i.postimg.cc/zfxNjmPn/images.jpg" alt="Drone-Image" className="Service-Images"/>
                                         </div>
                                </ScrollRevealSection>
                                <ScrollRevealSection id={"Service4"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                  
                                    <div className="Services-Container">
                                        <img src="https://i.postimg.cc/mgwmS5CF/images-16.jpg" alt="Drone-Image" className="Service-Images"/>
                                        <div className="Service-Text">
                                            <h1 className="Service-Card-Head">Tractor and Harvester rentals</h1>
                                            <div className="Service-Para-div"><p className="Service-Para">Tractor and harvester rentals offer farmers a flexible and cost-effective solution, allowing them to access essential machinery without the financial burden of ownership. These services provide seasonal adaptability, enabling farmers to scale their operations based on changing needs while avoiding the hassle of maintenance and repairs. With the latest technology at their fingertips, farmers can stay up-to-date without the need for frequent equipment upgrades.</p></div>
                                            <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">Book Now</button></a>
                                        </div> </div>
                                </ScrollRevealSection>
                               {/*} <ScrollRevealSection id={"Service5"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                    <div className="Services-Container">
                                    <div className="Service-Text2">
                                            <h1 className="Service-Card-Head">Transport & Storage</h1>
                                            <div className="Service-Para-div"><p className="Service-Para">Facilitating the logistics of agriculture, we provide transportation solutions and storage facilities. Ensuring produce reaches the market efficiently and is stored under optimal conditions for extended freshness.</p></div>
                        
                                        <button className="KnowMore-Button">Know More</button>
                                        </div>
                                        <img src="https://i.postimg.cc/13FjT8n2/cold-and-transportation.jpg" alt="Drone-Image" className="Service-Images"/>
                                         </div>
                            </ScrollRevealSection> */}
                                <ScrollRevealSection id={"Service6"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                    
                                    <div className="Services-Container">
                                        <img src="https://i.postimg.cc/Xq3t737J/images-17.jpg" alt="Drone-Image" className="Service-Images"/>
                                        <div className="Service-Text">
                                            <h1 className="Service-Card-Head">Empowering agriculture workforce:</h1>
                                           <div className="Service-Para-div"><p className="Service-Para">Skilled Labor is at the core of this transformative approach, advocating for increased engagement and training to empower the workforce in adapting to new technological advancements. By fostering a culture of continuous learning and upskilling, Skilled Labor ensures that workers remain competent and proficient in handling cutting-edge agricultural equipment, contributing to increased efficiency on the field.</p></div> 
                        
                                           <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">Book Now</button></a>
                                        </div> </div>
                                </ScrollRevealSection>
                                <ScrollRevealSection id={"Service7"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                    <div className="Services-Container">
                                    <div className="Service-Text2">
                                            <h1 className="Service-Card-Head">Equipment Selling</h1>
                                            <div className="Service-Para-div"><p className="Service-Para">Facilitating direct equipment transactions between farmers, equipment selling within the farming community offers a decentralized and efficient approach to meet agricultural machinery needs. Farmers engaging in equipment selling transactions benefit from a direct exchange, reducing intermediaries and associated costs. This practice not only provides farmers with access to affordable and well-maintained machinery but also fosters a sense of community support</p></div>
                        
                                            <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">Book Now</button></a>
                                        </div>
                                        <img src="https://i.postimg.cc/m2zMNMKx/farm-tools-names-with-pictures.png" alt="Drone-Image" className="Service-Images"/>
                                         </div>
                                </ScrollRevealSection>
                                {/*<ScrollRevealSection id={"Service8"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                    
                                    <div className="Services-Container">
                                        <img src="https://i.postimg.cc/d0jDDdJM/fpo-models.jpg" alt="Drone-Image" className="Service-Images"/>
                                        <div className="Service-Text">
                                            <h1 className="Service-Card-Head">FPO Model</h1>
                                            <div className="Service-Para-div"><p className="Service-Para">We collaborate with Farmer Producer Organizations (FPOs) to streamline agricultural processes. This model reduces cultivation costs, enhances productivity, and ensures fair returns for farmers by collectively addressing challenges.</p></div>
                        
                                            <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">Book Now</button></a>
                                        </div> </div>
                            </ScrollRevealSection> */}
                                {/*<ScrollRevealSection id={"Service9"} backgroundColor={"#E9F9EE"} height={"auto"}>
                                    <div className="Services-Container">
                                    <div className="Service-Text2">
                                            <h1  className="Service-Card-Head">Expert Advice</h1>
                                            <div className="Service-Para-div"><p className="Service-Para">Connect with our agricultural experts, the Crop Doctors, for personalized advice. Whether it's pest management, crop diseases, or general farming queries, our experts provide timely guidance to support farmers in making informed decisions.</p></div>
                        
                                            <a href="https://wa.me/message/J6Y7TZ7LEU3QA1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",alignSelf:"flex-start"}}> <button className="KnowMore-Button">Book Now</button></a>
                                        </div>
                                        <img src="https://i.postimg.cc/CKxZRg4M/Screenshot-2024-01-03-014206-transformed.png" alt="Drone-Image" className="Service-Images"/>
                                         </div>
                            </ScrollRevealSection> */}
                                <AddressComponent />
                                </>
                            
                            
                          )

            }}}
       
                </MyContext.Consumer>
    )
}

export default Services