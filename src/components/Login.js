import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {uniqueId} from '../utilis'


function Login ({setIsLoggedIn, onLogin, color, setColor}){
 
    const [displayForm, setDisplayForm]= useState('none')
    const [hideForm, setHideForm] = useState('')
    const navigate = useNavigate();
    const [formInput, setFormInput] = useState(onLogin
    //   {
    //     id:uniqueId(),
    //     username:"",
    //     password: "",
    //     email:""
    //   }
    )

    function handleChange(e) {
        setFormInput({
          ...formInput,
          [e.target.name]: e.target.value,
        });
      }
    // function handleSubmit(e){
    //     e.preventDefault();
    //     fetch("http://localhost:3001/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formInput),
    // })
    //   .then((r) => r.json())
    //   .then((user) => {
    //     onLogin(user);
    //     history.push("/");
    //   });
    //    setIsLoggedIn(true)
    // }
    function handleSubmit(e){
        e.preventDefault();
        setIsLoggedIn(true)
        
      navigate('/')
    }

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
      <input  name="username" onChange={handleChange} type="text" placeholder="name"/>
      <input  name="password" onChange={handleChange} type="password" placeholder="password"/>
      <input  name="email" onChange={handleChange} type="text" placeholder="email address"/>
      <button type="submit" onClick={showLogin} >create account</button>
      <p className="message">Already registered? <span onClick={showLogin} >Sign In</span></p>
      </form>
    <form className="login-form" onSubmit={handleSubmit} style={{display:`${displayForm}`}} >
      <input   name="username"  onChange={handleChange} type="text" placeholder="Username"/>
      <input   name="password" onChange={handleChange}type="password" placeholder="Password"/>
      <button type="submit" onClick={handleSubmit}>login</button>
      <p className="message">Not registered? <span >Create an account</span></p>
    </form>
  </div>
</div>
)
}


export default Login;