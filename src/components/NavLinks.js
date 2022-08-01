import React from "react";
import { NavLink} from "react-router-dom"

function Navlinks({color}){
    return(
        <div style={{background:`${color}`}} >
        <NavLink style={{background:`${color}`}} to="/">Home</NavLink>
        <NavLink style={{background:`${color}`}}to="/Destinations">Destinations</NavLink>
        <NavLink style={{background:`${color}`}}to="/Settings">Settings</NavLink>
        </ div> 
    )
}

export default Navlinks;