import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Careers from './Components/Careers/Careers';


function App() {
  return (
    <BrowserRouter>
  
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route   exact path="/about" component={About} />
        <Route exact path="/services" component={Services}/>
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
