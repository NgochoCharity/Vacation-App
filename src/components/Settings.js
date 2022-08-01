import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

function Settings ({ color, handleTheme, isDark}){
   const [isLoggedIn, setIsLoggedIn] = useState(false)

    const navigate = useNavigate()
    console.log(isLoggedIn)
    
    function handleLogout(){
      setIsLoggedIn(isLoggedIn => !isLoggedIn)
      navigate('/')
    }
    function handleDisplay(){

    }
   const theme = isDark ?'Light Mode':'Dark Mode'
    return(
        <div className="settings"style={{background:`${color}`}}>
            
                <center style={{background:`${color}`}}>
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
    )
}
export default Settings;