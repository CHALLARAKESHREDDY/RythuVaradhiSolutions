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
import MyContext from '../Context/Context';

let para1="రైతు వారధి సొల్యూషన్స్ వ్యవసాయంలో సాంకేతిక పురోగతిలో ముందంజలో ఉండటానికి కట్టుబడి ఉంది. వినూత్న పరిష్కారాలను నిరంతరం వెతకడం మరియు అమలు చేయడం ద్వారా, కంపెనీ వ్యవసాయ పద్ధతులను మెరుగుపరచడం, వనరుల వినియోగాన్ని ఆప్టిమైజ్ చేయడం మరియు వ్యవసాయ రంగం యొక్క మొత్తం ఆధునికీకరణకు దోహదం చేయడం లక్ష్యంగా పెట్టుకుంది."
let para4="రైతు వారధి సొల్యూషన్స్ విస్తృత సమాజంలో తన పాత్రను గుర్తిస్తుంది. స్థానిక రైతులకు మద్దతు ఇవ్వడం, ఉద్యోగ అవకాశాలను సృష్టించడం మరియు ఆర్థిక వృద్ధికి దోహదపడటం ద్వారా సానుకూల ప్రభావాన్ని చూపడానికి అంకితం చేయబడింది. కమ్యూనిటీ సంక్షేమానికి ప్రాధాన్యత ఇవ్వడం ద్వారా, కంపెనీ ఆపరేట్ చేసే ప్రాంతాల్లో సానుకూల మార్పు కోసం ఉత్ప్రేరకంగా ఉండాలనే లక్ష్యంతో ఉంది."
let para2="ఐక్యతలోని బలాన్ని గుర్తిస్తూ, రైతు వారధి సొల్యూషన్స్ రైతుల మధ్య సహకారాన్ని ప్రోత్సహిస్తుంది. కమ్యూనిటీ-ఆధారిత ప్లాట్‌ఫారమ్‌ను సృష్టించడం ద్వారా, స్టార్టప్ వనరులు, జ్ఞానం మరియు అనుభవాలను పంచుకోవడానికి వీలు కల్పిస్తుంది. ఈ సహకార విధానం వ్యక్తిగత వ్యవసాయ కార్యకలాపాలను మెరుగుపరచడమే కాకుండా మొత్తం వ్యవసాయ సమాజాన్ని బలోపేతం చేస్తుంది."
let para3="రైతు వారధి యొక్క గుండెలో రైతులకు సాధికారత మరియు అవగాహన కల్పించాలనే నిబద్ధత ఉంది. నైపుణ్యం కలిగిన కార్మికులు, ఆధునిక యంత్రాలు మరియు ఖచ్చితమైన వ్యవసాయం వంటి అధునాతన వ్యవసాయ పద్ధతుల ద్వారా, స్టార్టప్ రైతులను ఉద్ధరించడం, వారి సామర్థ్యాలను మెరుగుపరచడం మరియు స్థిరమైన పద్ధతుల ద్వారా వారి ఆర్థిక శ్రేయస్సుకు దోహదం చేయడం లక్ష్యంగా పెట్టుకుంది."

function About(){


    return(
        <MyContext.Consumer>
            {context => {
                 switch (context.language) {
                    case "English":
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
                        break;
                        case "Telugu":
                            return(
                                <>
        <ScrollRevealSection id={"about1"} url={"https://i.postimg.cc/59FzShj1/DSC-0982-01.jpg"} height={"105vh"} >
        <Navbar />
            <div className='About-Image'>
                <h1 style={{fontSize:"50px",fontFamily:"Roboto",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.5)"}} className="AboutUs-Head">మన టీం గురించి</h1>
            </div>
        </ScrollRevealSection>
        <ScrollRevealSection id={"about2"} height={"auto"} backgroundColor={"#E9F9EE"}>
            <div className="About2-Container"><h1 className="Company-Overview-Head">కంపెనీ ఉద్దేశం</h1></div>
            <div className="Company-Overview-Container">
                <img src="https://i.postimg.cc/52zZc1jJ/Empowering-Farmers-bg.jpg" alt="companyOverview" className="Company-Overview"/>
                <div className="Company-Overview-Para"><p  className="Overview-para">రైతు వారధి సొల్యూషన్స్ అనేది సమగ్రమైన సేవలను అందించడం ద్వారా వ్యవసాయ రంగంలో విప్లవాత్మక మార్పుల కోసం ఒక వినూత్న స్టార్టప్. రైతులకు సాధికారత కల్పించాలనే లక్ష్యంతో, అసమర్థత, వనరుల పరిమితులు మరియు ప్రత్యేక మద్దతు లేకపోవడంతో సహా సాంప్రదాయ వ్యవసాయ పద్ధతుల ద్వారా ఎదురయ్యే సవాళ్లను ఎదుర్కోవాలని కంపెనీ లక్ష్యంగా పెట్టుకుంది.</p></div>
            </div>
        </ScrollRevealSection>
        <ScrollRevealSection id={"about3"} height={"auto"} backgroundColor={"#E9F9EE"}>
            <div>
        <h1 style={{fontSize:"28px"}} className="CoreValues">ప్రధాన విలువలు</h1>

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
                            break;
                            default :
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
            }}
        </MyContext.Consumer>
    )



    
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