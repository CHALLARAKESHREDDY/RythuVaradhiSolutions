import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TbRobot } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { TfiSignal } from "react-icons/tfi";
import { FaHandshake } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

import './Home.css'
import ScrollRevealSection from '../ScrollRevealSection/ScrollRevealSection';
import Navbar from '../Navbar/Navbar';
import AddressComponent from '../AddressComponent/AddressComponent';
import Card from '../Card-Box-Component/Card';


let para1="We bring a paradigm shift to agriculture through our precision farming recommendations. By harnessing the power of data analytics, we empower farmers to achieve maximum productivity with minimal costs. From precise planting to chemical application and drone-based remote sensing, our solutions revolutionize every aspect of farming."

let para2="Navigate the agricultural marketplace effortlessly with our input and output platform. We are the catalyst that shortens supply chains, boosts transparency, and secures better prices for both agricultural inputs and harvested produce. we believe in connecting farmers directly to global markets, unlocking new opportunities and elevating agricultural economies."

let para3="Discover the future of farming with our AI-powered crop advisory services. We blend artificial intelligence with agricultural expertise to offer data-driven insights. Farmers benefit from informed decisions on resource allocation, crop cycle management, and overall optimization, ensuring sustainable and profitable farming practices."

let para4="Tech Innovations is your comprehensive source for all things agriculture. Our platforms serve as a knowledge hub, delivering real-time and accurate information on crops, market trends, tools, news, and modern agricultural practices. Stay at the forefront of the industry and cultivate success with us."


function Home() {

  const settings = {
    dots: true,
  
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
  };

  const slides= [
    {
      name: "Ramesh Reddy",
      title: "Labor Shortages",
      content: "Ramesh Reddy, a farmer in suraram, shares, 'Finding reliable labor has become one of our biggest challenges. Many young individuals from our village are migrating to urban areas in search of alternative employment opportunities. This leaves us with a shortage of skilled hands during critical farming seasons, impacting our ability to plant and harvest crops efficiently.'"
    },
    {
      name: "Challa Sambam",
      title: "Harvestor Shortages",
      content: "Challa Sambam, a farmer in suraram, expresses, 'Harvesters have become a lifeline for modern farming, but access to them is not always easy. Small-scale farmers like me often find it challenging to secure Harvesters at crucial times, leading to delays in harvesting and other essential activities. This directly affects our crop yields and overall productivity.'"
    },
    {
      name: "Rathna Ravi",
      title: "Input Cost Disparities",
      content: "Rathna Ravi, a veteran farmer, laments, 'The costs of seeds, fertilizers, and pesticides have been rising steadily, putting additional strain on our already tight budgets. With fluctuating market prices, it becomes a constant struggle to maintain profitability. We need solutions that can help us manage input costs more effectively.'"
    },
    {
      name: "Laxmaiah",
      title: "Lack of Technology Adoption",
      content: "Laxmaiah, an elderly farmer, reflects, 'While the world is advancing with technology, many of us here still rely on traditional farming methods. There's a lack of awareness and access to modern agricultural technologies. Embracing innovation could significantly improve our efficiency and reduce manual labor.'"
    },
    {
      name: "Chinnolla Sathaiah",
      title: "Market Access Challenges",
      content: "Chinnolla Sathaiah, a farmer in Bommapur, says, 'Getting our produce to the market is a hurdle. Limited transportation options and lack of proper storage facilities often lead to spoilage, and we end up selling at lower prices. Improving market access for farmers like us is crucial for a fair return on our hard work.'"
    }
  ];
  

  return (
    <>
      
      <ScrollRevealSection id={"Section-Page1"} url={"https://i.postimg.cc/wxhwH7gz/dji-5331597.jpg"} height={"100vh"}>
      <Navbar />

        <div className="Home-Title">
          <div>
            <h1 className="Home-Quote">'Elevating crops, Empowering farmers'</h1>
            <h3 className="Home-Quote2">"In the hands of a farmer, every crop is a story of dedication and hard work"</h3>
          </div>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection id={"Section-Page2"} height={"auto"}>
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

        <iframe style={{borderRadius:"10px"}} src="https://www.youtube.com/embed/-8zYyujqLJA" frameborder="0" allowfullscreen className="Hardship-Video">
</iframe>

        </div>
      </ScrollRevealSection >

      <ScrollRevealSection id={"section-page7"} backgroundColor={"#E9F9EE"} height={"auto"}>
      <div  className="Slider-Report">
        <h1  className="GroundReport-Head">Ground Report on Farmers</h1>
        </div>
        
                <Slider {...settings} style={{width:"100%",alignSelf:"Center"}}>
      {slides.map((slide, index) => (
        <div key={index} className="slide-container">
          <h2 style={{width:"100%",marginBottom:"20px"}}>{slide.title}</h2>
          <p style={{width:"100%"}} className="Review-Para">{slide.content}</p>
          <h3 style={{marginTop:"20px"}}>-{slide.name}</h3>
        </div>
      ))}
    </Slider>
        
        
      </ScrollRevealSection>
      
      <AddressComponent />
    </>
  )
}

export default Home;