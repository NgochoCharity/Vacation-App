import React from "react";
import Navlinks from "./NavLinks";


function Navbar ({color, setColor}){
    
    return(
        <header style={{background:`${color}`}}>
        <h1 style={{background:`${color}`}} className="logo" >Safari</h1>
        <nav style={{background:`${color}`}}>
           <Navlinks color={color} setColor={setColor}  />
        </nav>
        </header>
    )
}

export default Navbar;