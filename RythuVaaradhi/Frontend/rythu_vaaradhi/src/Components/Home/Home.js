
import React, {useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css'
import ScrollRevealSection from '../ScrollRevealSection/ScrollRevealSection';
import Navbar from '../Navbar/Navbar';
import AddressComponent from '../AddressComponent/AddressComponent';
import MyContext from '../Context/Context';
import { FaRegArrowAltCircleDown } from "react-icons/fa";





function Home() {

  useEffect(() => {
    document.title = "RythuVaaradhi"; // Set the new tab title
  }, []);

 return(
  <MyContext.Consumer>
    {context => {
      switch (context.language){
        case "English":
          return(
            <>
      
            <ScrollRevealSection id={"Section-Page1"} url={"https://i.postimg.cc/jdb1Bqsc/DSC-1097.jpg"} height={"100vh"}>
            <Navbar />
      
              <div className="Home-Title">
                <div>
                  <h1 className="Home-Quote">'Elevating crops, Empowering farmers'</h1>
                  <h3 className="Home-Quote2">"In the hands of a farmer, every crop is a story of dedication and hard work"</h3>
                  <div style={{marginTop:"40px"}}> <h5  style={{fontSize:"17px",color:"#ffffff"}}>Swipe</h5><FaRegArrowAltCircleDown style={{fontSize:"20px",color:"#ffffff"}}/></div>
                </div>
               

              </div>
            </ScrollRevealSection>
      
            {/*<ScrollRevealSection id={"Section-Page2"} height={"auto"}>
              <div className="Main-Cards-Container">
              <h1 className="Key-Offerings">Key Offerings</h1>
      
             <div className="Cards-Container">
              
             <Card para={para1} icon={TbRobot} title={"Precision Farming"}/>
              <Card para={para2} icon={TiShoppingCart} title={"Market Dynamics"} />
              <Card para={para3} icon={TfiSignal} title={"AI Crafted Crop"} />
              <Card para={para4} icon={FaHandshake} title={"Hub of Agriculture"} />
              </div>
          </div>
              </ScrollRevealSection>
          
              <ScrollRevealSection id={"Section-Page3"} backgroundColor={"#E9F9EE"} height={"30vh"}>
                <div className="Vision-mission-Heading-Container">
                <h1  className="Vision-Mission-Heading">Vision & Mission</h1>
                </div>
                </ScrollRevealSection>
      
      
            <ScrollRevealSection id={"Section-Page4"}  height={"auto"}>
                <div className="Vision-Image" style={{width:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <div className="Our-Vision-Container">
                  <h1 className="Our-Vision"> Our Vision</h1>
                  <p className="Our-Vision-Para">Driving rural communities towards innovation, collaboration, and empowerment to cultivate a future where every field thrives with unparalleled success.</p>
                  </div>
                </div>
              
            </ScrollRevealSection>
            <ScrollRevealSection id={"Section-Page5"}  height={"auto"}>
            <div className="Mission-Image" style={{width:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className="Our-Vision-Container">
                  <h1 className="Our-Vision"> Our Mission</h1>
                  <p className="Our-Vision-Para">Elevating agriculture by seamlessly connecting the fragmented value chain through the integration of data-driven insights, tech enabled products and comprehensive end-to-end products and services.</p>
                  </div>
                  
                </div>
              
            </ScrollRevealSection>
            <ScrollRevealSection id={"section-Page6"} backgroundColor={"#E9F9EE"} height={"auto"} >
              <div ><h1 className='Ecosystem-head' >Our Ecosystem</h1></div>
              
              <img src="https://i.postimg.cc/vHpfnN31/Picsart-23-12-27-23-15-48-553.png" alt="eco-system" className="EcoSystem-Image" />
            </ScrollRevealSection>
            <ScrollRevealSection id={"section-Page7"} backgroundColor={"#E9F9EE"} height={"auto"} >
            <h1 className="Hardships">Hardships of Farmers :</h1>
              <div>
      
              <iframe style={{borderRadius:"10px"}} src="https://www.youtube.com/embed/-8zYyujqLJA" frameBorder="0" allowFullScreen className="Hardship-Video">
      </iframe>
      
              </div>
            </ScrollRevealSection >
      
            <ScrollRevealSection id={"section-page7"} backgroundColor={"#E9F9EE"} height={"auto"}>
            <div  className="Slider-Report">
              <h1  className="GroundReport-Head">Ground Report on Farmers</h1>
              </div>
              
                     {/* <Slider {...settings} style={{padding:"0px"}}>
            {slides.map((slide, index) => (
              <div key={index} className="slide-container" style={{padding:"0px",width:"100%"}} >
                <h2 style={{width:"100%",marginBottom:"20px"}}>{slide.title}</h2>
                <p style={{width:"100%"}} className="Review-Para">{slide.content}</p>
                <h3 style={{marginTop:"20px"}}>-{slide.name}</h3>
              </div>
            ))}
            </Slider> 
                
      
         <Carousel className="Carousel">
                      <div >
                        <h3 style={{margin:"10px"}}>{slides[0].title}</h3>
                        <p >{slides[0].content}</p>
                          <p  style={{paddingBottom:"20px",margin:"13px",fontWeight:"bold"}}>-{slides[0].name}</p>
                      </div>
                      <div >
                        <h3 style={{margin:"10px"}}>{slides[1].title}</h3>
                        <p >{slides[1].content}</p>
                        <p  style={{paddingBottom:"20px",margin:"13px",fontWeight:"bold"}}>-{slides[1].name}</p>
      
                      </div>
                      <div >
                      <h3 style={{margin:"10px"}}>{slides[2].title}</h3>
                        <p >{slides[2].content}</p>
                        <p  style={{paddingBottom:"20px",margin:"13px",fontWeight:"bold"}}>-{slides[2].name}</p>
      
                      </div>
                      <div >
                        <h3 style={{margin:"10px"}}>{slides[3].title}</h3>
                        <p >{slides[3].content}</p>
                        <p  style={{paddingBottom:"20px",margin:"13px",fontWeight:"bold"}}>-{slides[3].name}</p>
                      </div>
                      <div>
                      <h3 style={{margin:"10px"}}>{slides[4].title}</h3>
                        <p >{slides[4].content}</p>
                        <p  style={{paddingBottom:"20px",margin:"13px",fontWeight:"bold"}}>-{slides[4].name}</p>
                      </div>
                  </Carousel>
              
              
            </ScrollRevealSection> */}
            
            <AddressComponent />
          </>
          )
          break;
          case "Telugu":
            return(
              <>
      
              <ScrollRevealSection id={"Section-Page1"} url={"https://i.postimg.cc/jdb1Bqsc/DSC-1097.jpg"} height={"100vh"}>
              <Navbar />
        
                <div className="Home-Title">
                  <div>
                    <h1 className="Home-Quote">'ఈ యుద్ధం రైతన్న కోసం'</h1>
                    <h3 className="Home-Quote2">"వ్యవసాయం: ప్రతి పంట అంకితభావం మరియు కృషితో రైతు హృదయాన్ని కలుపుతుంది"</h3>
                    <div style={{marginTop:"40px"}}> <h5  style={{fontSize:"17px",color:"#ffffff"}}>Swipe</h5><FaRegArrowAltCircleDown style={{fontSize:"20px",color:"#ffffff"}}/></div>

                  </div>

                </div>
              </ScrollRevealSection>
        
              {/*<ScrollRevealSection id={"Section-Page2"} height={"auto"}>
                <div className="Main-Cards-Container">
                <h1 className="Key-Offerings">Key Offerings</h1>
        
               <div className="Cards-Container">
                
               <Card para={para1} icon={TbRobot} title={"Precision Farming"}/>
                <Card para={para2} icon={TiShoppingCart} title={"Market Dynamics"} />
                <Card para={para3} icon={TfiSignal} title={"AI Crafted Crop"} />
                <Card para={para4} icon={FaHandshake} title={"Hub of Agriculture"} />
                </div>
            </div>
                </ScrollRevealSection>
            
                <ScrollRevealSection id={"Section-Page3"} backgroundColor={"#E9F9EE"} height={"30vh"}>
                  <div className="Vision-mission-Heading-Container">
                  <h1  className="Vision-Mission-Heading">Vision & Mission</h1>
                  </div>
                  </ScrollRevealSection>
        
        
              <ScrollRevealSection id={"Section-Page4"}  height={"auto"}>
                  <div className="Vision-Image" style={{width:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div className="Our-Vision-Container">
                    <h1 className="Our-Vision"> Our Vision</h1>
                    <p className="Our-Vision-Para">Driving rural communities towards innovation, collaboration, and empowerment to cultivate a future where every field thrives with unparalleled success.</p>
                    </div>
                  </div>
                
              </ScrollRevealSection>
              <ScrollRevealSection id={"Section-Page5"}  height={"auto"}>
              <div className="Mission-Image" style={{width:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <div className="Our-Vision-Container">
                    <h1 className="Our-Vision"> Our Mission</h1>
                    <p className="Our-Vision-Para">Elevating agriculture by seamlessly connecting the fragmented value chain through the integration of data-driven insights, tech enabled products and comprehensive end-to-end products and services.</p>
                    </div>
                    
                  </div>
                
              </ScrollRevealSection>
              <ScrollRevealSection id={"section-Page6"} backgroundColor={"#E9F9EE"} height={"auto"} >
                <div ><h1 className='Ecosystem-head' >Our Ecosystem</h1></div>
                
                <img src="https://i.postimg.cc/vHpfnN31/Picsart-23-12-27-23-15-48-553.png" alt="eco-system" className="EcoSystem-Image" />
              </ScrollRevealSection>
              <ScrollRevealSection id={"section-Page7"} backgroundColor={"#E9F9EE"} height={"auto"} >
              <h1 className="Hardships">Hardships of Farmers :</h1>
                <div>
        
                <iframe style={{borderRadius:"10px"}} src="https://www.youtube.com/embed/-8zYyujqLJA" frameBorder="0" allowFullScreen className="Hardship-Video">
        </iframe>
        
                </div>
              </ScrollRevealSection >
        
              <ScrollRevealSection id={"section-page7"} backgroundColor={"#E9F9EE"} height={"auto"}>
              <div  className="Slider-Report">
                <h1  className="GroundReport-Head">Ground Report on Farmers</h1>
                </div>
                
                       {/* <Slider {...settings} style={{padding:"0px"}}>
              {slides.map((slide, index) => (
                <div key={index} className="slide-container" style={{padding:"0px",width:"100%"}} >
                  <h2 style={{width:"100%",marginBottom:"20px"}}>{slide.title}</h2>
                  <p style={{width:"100%"}} className="Review-Para">{slide.content}</p>
                  <h3 style={{marginTop:"20px"}}>-{slide.name}</h3>
                </div>
              ))}
              </Slider> 
                  
        
           <Carousel className="Carousel">
                        <div >
                          <h3 style={{margin:"10px"}}>{slides[0].title}</h3>
                          <p >{slides[0].content}</p>
                            <p  style={{paddingBottom:"20px",margin:"13px",fontWeight:"bold"}}>-{slides[0].name}</p>
                        </div>
                        <div >
                          <h3 style={{margin:"10px"}}>{slides[1].title}</h3>
                          <p >{slides[1].content}</p>
                          <p  style={{paddingBottom:"20px",margin:"13px",fontWeight:"bold"}}>-{slides[1].name}</p>
        
                        </div>
                        <div >
                        <h3 style={{margin:"10px"}}>{slides[2].title}</h3>
                          <p >{slides[2].content}</p>
                          <p  style={{paddingBottom:"20px",margin:"13px",fontWeight:"bold"}}>-{slides[2].name}</p>
        
                        </div>
                        <div >
                          <h3 style={{margin:"10px"}}>{slides[3].title}</h3>
                          <p >{slides[3].content}</p>
                          <p  style={{paddingBottom:"20px",margin:"13px",fontWeight:"bold"}}>-{slides[3].name}</p>
                        </div>
                        <div>
                        <h3 style={{margin:"10px"}}>{slides[4].title}</h3>
                          <p >{slides[4].content}</p>
                          <p  style={{paddingBottom:"20px",margin:"13px",fontWeight:"bold"}}>-{slides[4].name}</p>
                        </div>
                    </Carousel>
                
                
              </ScrollRevealSection> */}
              
              <AddressComponent />
            </>
            
            );
            break ;
            default :
            return(
              <>
      
              <ScrollRevealSection id={"Section-Page1"} url={"https://i.postimg.cc/jdb1Bqsc/DSC-1097.jpg"} height={"100vh"}>
              <Navbar />
        
                <div className="Home-Title">
                  <div>
                    <h1 className="Home-Quote">'Elevating crops, Empowering farmers'</h1>
                    <h3 className="Home-Quote2">"In the hands of a farmer, every crop is a story of dedication and hard work"</h3>
                  </div>
                </div>
              </ScrollRevealSection>
        
              {/*<ScrollRevealSection id={"Section-Page2"} height={"auto"}>
                <div className="Main-Cards-Container">
                <h1 className="Key-Offerings">Key Offerings</h1>
        
               <div className="Cards-Container">
                
               <Card para={para1} icon={TbRobot} title={"Precision Farming"}/>
                <Card para={para2} icon={TiShoppingCart} title={"Market Dynamics"} />
                <Card para={para3} icon={TfiSignal} title={"AI Crafted Crop"} />
                <Card para={para4} icon={FaHandshake} title={"Hub of Agriculture"} />
                </div>
            </div>
                </ScrollRevealSection>
            
                <ScrollRevealSection id={"Section-Page3"} backgroundColor={"#E9F9EE"} height={"30vh"}>
                  <div className="Vision-mission-Heading-Container">
                  <h1  className="Vision-Mission-Heading">Vision & Mission</h1>
                  </div>
                  </ScrollRevealSection>
        
        
              <ScrollRevealSection id={"Section-Page4"}  height={"auto"}>
                  <div className="Vision-Image" style={{width:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div className="Our-Vision-Container">
                    <h1 className="Our-Vision"> Our Vision</h1>
                    <p className="Our-Vision-Para">Driving rural communities towards innovation, collaboration, and empowerment to cultivate a future where every field thrives with unparalleled success.</p>
                    </div>
                  </div>
                
              </ScrollRevealSection>
              <ScrollRevealSection id={"Section-Page5"}  height={"auto"}>
              <div className="Mission-Image" style={{width:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <div className="Our-Vision-Container">
                    <h1 className="Our-Vision"> Our Mission</h1>
                    <p className="Our-Vision-Para">Elevating agriculture by seamlessly connecting the fragmented value chain through the integration of data-driven insights, tech enabled products and comprehensive end-to-end products and services.</p>
                    </div>
                    
                  </div>
                
              </ScrollRevealSection>
              <ScrollRevealSection id={"section-Page6"} backgroundColor={"#E9F9EE"} height={"auto"} >
                <div ><h1 className='Ecosystem-head' >Our Ecosystem</h1></div>
                
                <img src="https://i.postimg.cc/vHpfnN31/Picsart-23-12-27-23-15-48-553.png" alt="eco-system" className="EcoSystem-Image" />
              </ScrollRevealSection>
              <ScrollRevealSection id={"section-Page7"} backgroundColor={"#E9F9EE"} height={"auto"} >
              <h1 className="Hardships">Hardships of Farmers :</h1>
                <div>
        
                <iframe style={{borderRadius:"10px"}} src="https://www.youtube.com/embed/-8zYyujqLJA" frameBorder="0" allowFullScreen className="Hardship-Video">
        </iframe>
        
                </div>
              </ScrollRevealSection >
        
              <ScrollRevealSection id={"section-page7"} backgroundColor={"#E9F9EE"} height={"auto"}>
              <div  className="Slider-Report">
                <h1  className="GroundReport-Head">Ground Report on Farmers</h1>
                </div>
                
                       {/* <Slider {...settings} style={{padding:"0px"}}>
              {slides.map((slide, index) => (
                <div key={index} className="slide-container" style={{padding:"0px",width:"100%"}} >
                  <h2 style={{width:"100%",marginBottom:"20px"}}>{slide.title}</h2>
                  <p style={{width:"100%"}} className="Review-Para">{slide.content}</p>
                  <h3 style={{marginTop:"20px"}}>-{slide.name}</h3>
                </div>
              ))}
              </Slider> 
                  
        
           <Carousel className="Carousel">
                        <div >
                          <h3 style={{margin:"10px"}}>{slides[0].title}</h3>
                          <p >{slides[0].content}</p>
                            <p  style={{paddingBottom:"20px",margin:"13px",fontWeight:"bold"}}>-{slides[0].name}</p>
                        </div>
                        <div >
                          <h3 style={{margin:"10px"}}>{slides[1].title}</h3>
                          <p >{slides[1].content}</p>
                          <p  style={{paddingBottom:"20px",margin:"13px",fontWeight:"bold"}}>-{slides[1].name}</p>
        
                        </div>
                        <div >
                        <h3 style={{margin:"10px"}}>{slides[2].title}</h3>
                          <p >{slides[2].content}</p>
                          <p  style={{paddingBottom:"20px",margin:"13px",fontWeight:"bold"}}>-{slides[2].name}</p>
        
                        </div>
                        <div >
                          <h3 style={{margin:"10px"}}>{slides[3].title}</h3>
                          <p >{slides[3].content}</p>
                          <p  style={{paddingBottom:"20px",margin:"13px",fontWeight:"bold"}}>-{slides[3].name}</p>
                        </div>
                        <div>
                        <h3 style={{margin:"10px"}}>{slides[4].title}</h3>
                          <p >{slides[4].content}</p>
                          <p  style={{paddingBottom:"20px",margin:"13px",fontWeight:"bold"}}>-{slides[4].name}</p>
                        </div>
                    </Carousel>
                
                
              </ScrollRevealSection> */}
              
              <AddressComponent />
            </>
            )
      }
    }}
  </MyContext.Consumer>
 )
  
}

export default Home;



