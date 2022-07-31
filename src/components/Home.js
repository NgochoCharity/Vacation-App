import React from "react";
import { Navigate } from "react-router-dom";

 function Home({isLoggedIn, color, setColor}){
     if (isLoggedIn === false) return <Navigate to="/Login" />;

      function handleClick(){
        return <Navigate to="/Destination" />
      }
    return (

        <div style={{background:`${color}`}}>
              
            <section className="hero">
                    <div className="background-image">
                  <div className="hero-content-area">
                    <h1>Safari</h1>
                    <h3> Unmissable Adventure Tours Around the World</h3>
                    <button onClick={handleClick} className="btn">Explore</button>
                    </div>
                </div>  
            </section>
        
        <section className="about">
        <h3 className="title">About Us</h3>
            <p>Book your Holiday Accommodation now. Quick, Easy Booking. No Reservation Costs. Read Real Guest Reviews. Best Price Guarantee.Every day, Hosts offer unique stays and experiences that make it possible for guests to connect with communities in a more authentic way. </p>
            <hr />
           
        </section>
        
        <section style={{background:`${color}`}} className="contact">
		<h3 className="title">Join our newsletter</h3>	
		<p>Information will go here(if any)</p>
		<hr />

		<form>
			<input type="email" placeholder="Email" />
			<button className="btn">Subscribe now</button>
		</form>
	</section>

	<footer>
    <p>Feel free to contact us</p>
		<ul>
			<li></li>
			<li><i className="fa fa-facebook-square"></i></li>
			<li><i className="fa fa-snapchat-square"></i></li>
			<li><i className="fa fa-pinterest-square"></i></li>
			<li><i className="fa fa-github-square"></i></li>
		</ul>

		<p>Copyright @ 2022 SafariTravels.com</p>
        <span>TERMS OF SERVICE | PRIVACY POLICY | SECURITY | SUPPORT</span>
	</footer>
        
        </div>

    )
 }

 export default Home;