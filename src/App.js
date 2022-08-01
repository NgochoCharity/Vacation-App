import React, {useState} from "react";
import Home from "./components/Home";
import Destinations from "./components/Destinations"
import Login from "./components/Login"
import Settings from "./components/Settings";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";




function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [color , setColor] = useState('white')
  const [isDark, setIsDark] = useState(false)
  const [display, setDisplay] = useState('none')

  function handleTheme(){
   setIsDark(isDark => !isDark)
    if (isDark === false){
      setColor('white')
    }else{
      setColor('#232323')
    }

console.log(isDark)
  }

  return (
    <div className="App" style={{background:`${color}`}}>
      <Navbar isLoggedIn ={isLoggedIn} color={color} setColor={setColor} />
     <Routes>
       <Route exact path = "/Destinations" element= {<Destinations color={color} setColor={setColor}/>} /> 
      <Route exact path = "/Login" element= {<Login setIsLoggedIn={setIsLoggedIn}  color={color} setColor={setColor} setDisplay={setDisplay}/>} />
      <Route exact path = "/Settings" element= {<Settings setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} color={color} setColor={setColor} handleTheme={handleTheme}/>} isDark={isDark} setIsDark={setIsDark} />
      <Route exact path = "/" element= {<Home isLoggedIn={isLoggedIn} color={color} setColor={setColor} display={display}/>} />
     </Routes>
    
    </div>
  );
}

export default App;

