import { useState,useContext, useEffect} from 'react'
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FaArrowRight } from "react-icons/fa6";

import './Navbar.css'
import MyContext from '../Context/Context';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const {language, changeLanguage}=useContext(MyContext)
  const [color,setColor]=useState("#fff")


  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor(prevColor => prevColor === "#fff" ? "#000" : "#fff");
    }, 500);

    return () => clearInterval(intervalId); // Cleanup function to clear interval
  }, [])

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const changeContext=(event)=>{
    if (event.target.value==="English"){
      localStorage.setItem("language",event.target.value)
    }else{
      localStorage.setItem("language",event.target.value)
    }
    changeLanguage(event.target.value)

  }


  return(
    <MyContext.Consumer>
      {(context)=>{
        switch (context.language){
              case "English":
                return (
                  <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1 style={{color:"#145A32"}}>RythuVaaradhi</h1>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <FaArrowRight style={{color:color}}/>
        <IoMenu className="IoMenu" />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <select value={language} onChange={changeContext}>
                <option value="Telugu">తెలుగు</option>
                <option value="English">English</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
  break ;
  case "Telugu" :
       return(
        <nav className="navbar">
        <div className="container">
          <div className="logo">
            <h1 style={{color:"#145A32"}}>రైతు వారధి</h1>
          </div>
          
          <div className="menu-icon" onClick={handleShowNavbar}>
          <FaArrowRight style={{color:color}}/>
          <IoMenu className="IoMenu" />
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/" exact>హోమ్</NavLink>
              </li>
              <li>
                <NavLink to="/about">అబౌట్</NavLink>
              </li>
              <li>
                <NavLink to="/services">సర్వీసెస్</NavLink>
              </li>
              <li>
                <NavLink to="/careers">కెరీర్స్</NavLink>
              </li>
              <li>
                <NavLink to="/contact">కాంటాక్ట్</NavLink>
              </li>
              <li>
                <select value={language} onChange={changeContext}>
                  <option value="Telugu">తెలుగు</option>
                  <option value="English">English</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
       )
       break;
       default :
         return(
          <nav className="navbar">
          <div className="container">
            <div className="logo">
              <h1 style={{color:"#145A32"}}>RythuVaaradhi</h1>
            </div>
          
            <div className="menu-icon" onClick={handleShowNavbar}>
            <FaArrowRight style={{color:color}}/>
            <IoMenu className="IoMenu" />
            </div>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
              <ul>
                <li>
                  <NavLink to="/" exact>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/careers">Careers</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <select value={language} onChange={changeContext}>
                    <option value="Telugu">Telugu</option>
                    <option value="English">English</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )
         
                
        }
      }}
    </MyContext.Consumer>
  )



}

export default Navbar