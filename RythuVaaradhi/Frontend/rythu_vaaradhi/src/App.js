import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Careers from './Components/Careers/Careers';
import MyContext from './Components/Context/Context';
import { useState } from 'react';


function App() {

  const [language,changeLanguage]=useState(localStorage.getItem("language"))

  return (
    <MyContext.Provider value={{language,changeLanguage}}>
    <BrowserRouter>
  
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route   exact path="/about" component={About} />
        <Route exact path="/services" component={Services}/>
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
