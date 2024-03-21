import AddressComponent from "../AddressComponent/AddressComponent"
import Navbar from "../Navbar/Navbar"
import ScrollRevealSection from "../ScrollRevealSection/ScrollRevealSection"
import './Services.css'

function Services(){
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
}

export default Services