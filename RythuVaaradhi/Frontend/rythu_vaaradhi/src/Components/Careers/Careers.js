import {useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import './Careers.css'
import AddressComponent from '../AddressComponent/AddressComponent'

function Careers(){
   const [color,changeColor]=useState("black")
   useEffect(()=>{
      const interval=setInterval(()=>{
        changeColor((prevColor)=>prevColor==="black"?"red":"black")
      },500)
      return ()=>clearInterval(interval)
   },[])

    return(
        <>
        <div className="Career">
        <Navbar />
        <div className="Career-Head">
        <h1>Careers </h1>
        <h1 style={{color:`${color}`}}>Coming Soon</h1>
        </div>
        
        
        </div>
        <AddressComponent />
        </>
    )
}

export default Careers