import Header from "./Components/Header";
import Notes from "./Components/Notes";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

import { BrowserRouter,Routes,Route } from 'react-router-dom';


import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Navbar  />
    
    <Routes>
     <Route exact path="/home" element= {<Home/>}/>
     <Route exact path="/" element= {<Home/>}/>
    <Route path='/Signup' element= {<Signup/>}/>
    <Route path='/login' element= {<Login/>}/>
    <Route exact path="/About" element={<About  />} />
    <Route exact path="/Notes" element= {<Notes />}/>
    <Route exact path="/" element= {<Header/>}/>
  
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
