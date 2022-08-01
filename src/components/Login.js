import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {uniqueId} from '../utilis'


function Login ({setIsLoggedIn, onLogin, color,setDisplay}){
 
    const [displayForm, setDisplayForm]= useState('none')
    const [hideForm, setHideForm] = useState('')
    const navigate = useNavigate();
    const [formInput, setFormInput] = useState(
      {
        id:uniqueId(),
        username:"",
        password: "",
        email:""
      }
    )

    function handleChange(e) {
        setFormInput({
          ...formInput,
          [e.target.name]: e.target.value,
        });
      }
    function handleSubmit(e){

        e.preventDefault();
        fetch("https://blooming-plateau-33291.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInput),
    }).then((response) => response.json)
    
       setIsLoggedIn(true)
       setDisplay(null)
        navigate('/')
    }
    // function handleSubmit(e){
    //     e.preventDefault();
    //     setIsLoggedIn(true)
    //     setDisplay(null)
    //     navigate('/')
    // }

    function showLogin(e){
      e.preventDefault();
      setDisplayForm('')
      setHideForm('none')
      
    }
    console.log(formInput)
    
return (
    <div className="login-page" style={{background:`${color}`}}>
  <div className="form">

    <form className="register-form" onSubmit={handleSubmit} style={{display:`${hideForm}`}}>
       <center> <h3 className="logo">Welcome </h3> </center>
      <input  name="username" onChange={handleChange} type="text" placeholder="name" value={formInput.username}/>
      <input  name="password" onChange={handleChange} type="password" placeholder="password"value={formInput.password}/>
      <input  name="email" onChange={handleChange} type="text" placeholder="email address" value={formInput.email}/>
      <button type="submit" onClick={showLogin} >create account</button>
      <p className="message">Already registered? <span onClick={showLogin} >Sign In</span></p>
      </form>
    <form className="login-form" onSubmit={handleSubmit} style={{display:`${displayForm}`}} >
    <center> <h3 className="logo">Welcome</h3> </center>
     
      <input   name="username"  onChange={handleChange} type="text" placeholder="Username" value={formInput.username}/>
      <input   name="password" onChange={handleChange}type="password" placeholder="Password" value={formInput.password}/>
      <button type="submit" onClick={handleSubmit}>login</button>
      <p className="message">Not registered? <span >Create an account</span></p>
    </form>
  </div>
</div>
)
}


export default Login;