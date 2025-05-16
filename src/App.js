// import logo from './logo.svg';
import './App.css';
import About from './Home/About';
import DarkVariantExample, { Home } from './Home/Home';

import Navbar from './Home/Navbar';
import Skills from './Home/Skills';



function App() {
  return (
    <div className="App ">

      <Navbar/>
     {/* <br />
     <br />
 <br /> */}
     <Home/>
  
 
     <About/>
     <Skills/>
    </div>
  );
}

export default App;
