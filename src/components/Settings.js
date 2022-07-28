import React from "react";
import { useNavigate } from "react-router-dom";

function Settings ({setIsLoggedIn, color, setColor, handleTheme, isDark}){
    const navigate = useNavigate()

    function handleLogout({ setIsLoggedIn}){
      setIsLoggedIn(false)
      navigate('/')
    }
    function handleDisplay(){

    }
   const theme = isDark ?'Light Mode':'Dark Mode'
    return(
        <div style={{background:`${color}`}}>
            <div className="settings">
                <center>
                   <div className="profile"> 
                      <button onClick={handleDisplay} >Hide
                      Profile</button>
                   </div>
                   <div className="logout">
                      <button onClick={handleLogout}>Logout</button>
                   </div>
                   <div className="theme">
                   <button onClick={handleTheme}>{theme}</button>
                   </div>
                </center>
            </div>
        </div>
    )
}
export default Settings;