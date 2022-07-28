import React from "react";
import Home from "./components/Home";
import Destinations from "./components/Destinations"
import Reservation from "./components/Reservation"
import Login from "./components/Login"
import Settings from "./components/Settings";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route exact path = "/Destinations" element= {<Destinations/>} />
      <Route exact path = "/Reservation" element= {<Reservation/>} />
      <Route exact path = "/Login" element= {<Login/>} />
      <Route exact path = "/Settings" element= {<Settings/>} />
      <Route exact path = "/" element= {<Home />} />
     </Routes>
    </div>
  );
}

export default App;

