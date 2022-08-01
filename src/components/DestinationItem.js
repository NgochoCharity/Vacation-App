import React, {useState} from "react";
import { Navigate } from "react-router-dom";


function DestinationItem (destination){

    const [isClicked, setIsClicked] = useState(false)
    
    function handleClick(){
        setIsClicked((isClicked) => !isClicked)
       
    }
      
    
return(
    <div key={destination.id} className="place" >
          <img  onClick={handleClick} key={destination.id} src={destination.images[0]} alt='place'/>
          <div>
        
          <div className="title">
              <h3 key={destination.title}>{destination.title}</h3>
              <h4 key={destination.id} ><i className='bx bxs-star-half'></i>{destination.rating}</h4>
           </div>

           <table>
            <tbody>
              <tr>
                <td key={destination.id}><i className='bx bxs-bed'></i>{destination.bed}</td>
                <td key={destination.id}><i className='bx bxs-bath' ></i>{destination.bath}</td>
                <td key={destination.id}><i className='bx bxs-group'></i>{destination.guests}</td>
             </tr>
             </tbody>
           </table>
           
         <p key={destination.price}>{destination.price}</p>
         </div>
        
       </div>
)
 
}

export default DestinationItem;