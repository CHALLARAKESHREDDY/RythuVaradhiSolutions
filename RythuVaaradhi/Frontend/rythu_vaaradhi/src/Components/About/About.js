import ScrollRevealSection from "../ScrollRevealSection/ScrollRevealSection"
import { FcIdea } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { LiaFistRaisedSolid } from "react-icons/lia";
import { GiWaterRecycling } from "react-icons/gi";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import "./About.css"
import Card from "../Card-Box-Component/Card";
import Navbar from "../Navbar/Navbar";
import AddressComponent from "../AddressComponent/AddressComponent";

let para1="Rythu Vaaradhi Solutions is committed to staying at the forefront of technological advancements in agriculture. By constantly seeking and implementing innovative solutions, the company aims to enhance farming practices, optimize resource usage, and contribute to the overall modernization of the agricultural sector."
let para2="Recognizing the strength in unity, Rythu Vaaradhi Solutions promotes collaboration among farmers. By creating a community-driven platform, the startup facilitates the sharing of resources, knowledge, and experiences. This collaborative approach not only improves individual farm operations but also strengthens the agricultural community as a whole."
let para3="At the heart of Rythu Vaaradhi is the commitment to empower and educate farmers. Through access to skilled labor, modern machinery, and advanced agricultural practices like precision farming, the startup aims to uplift farmers, enhance their capabilities, and contribute to their economic well-being through sustainable practices."
let para4="Rythu Vaaradhi Solutions recognizes its role in the broader community. The startup is dedicated to making a positive impact by supporting local farmers, creating job opportunities, and contributing to economic growth. By prioritizing community welfare, the company aims to be a catalyst for positive change in the regions it operates."

function About(){

    
    return(
        <>
        <ScrollRevealSection id={"about1"} url={"https://i.postimg.cc/59FzShj1/DSC-0982-01.jpg"} height={"105vh"} >
        <Navbar />
            <div className='About-Image'>
                <h1 style={{fontSize:"50px",fontFamily:"Roboto",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.5)"}} className="AboutUs-Head">About Us</h1>
            </div>
        </ScrollRevealSection>
        <ScrollRevealSection id={"about2"} height={"auto"} backgroundColor={"#E9F9EE"}>
            <div className="About2-Container"><h1 className="Company-Overview-Head">Company Overview</h1></div>
            <div className="Company-Overview-Container">
                <img src="https://i.postimg.cc/52zZc1jJ/Empowering-Farmers-bg.jpg" alt="companyOverview" className="Company-Overview"/>
                <div className="Company-Overview-Para"><p  className="Overview-para">Rythu Vaaradhi Solutions is an innovative startup on a mission to revolutionize the agricultural sector by providing a comprehensive suite of services. With a vision to empower farmers, the company aims to tackle challenges faced by traditional farming methods, including inefficiency, resource constraints, and a lack of specialized support.</p></div>
            </div>
        </ScrollRevealSection>
        <ScrollRevealSection id={"about3"} height={"auto"} backgroundColor={"#E9F9EE"}>
            <div>
        <h1 style={{fontSize:"28px"}} className="CoreValues">Core Values</h1>

       <div className="Cards-Container">
        
       <Card para={para1} icon={FcIdea} title={"Innovation"} className="para1"/>
            <Card para={para2} icon={FcCollaboration} title={"Collaboration"}/>
            <Card para={para3} icon={GiWaterRecycling} title={"Sustainability"}/>
            <Card para={para4} icon={LiaFistRaisedSolid} title={"Community Impact"} />
       </div>
       </div>
            
        </ScrollRevealSection>
        <AddressComponent />
        
        </>
    )
}

export default About 