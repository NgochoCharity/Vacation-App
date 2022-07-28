import React from "react";
import { NavLink} from "react-router-dom"


function Navbar (){

    return(
        <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Destinations">Destinations</NavLink>
        <NavLink to="/Reservation">Reservation</NavLink>
        <NavLink to="/Settings">Settings</NavLink>
        </>
    )
}

export default Navbar;