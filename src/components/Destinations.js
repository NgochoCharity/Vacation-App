import React, {useEffect, useState} from "react";
import DestinationItem from "./DestinationItem";


function Destinations ({color, setColor}){
    
    const [items, setItems] = useState([]);

    useEffect(() =>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b1922c70f7msh135d7b1fa27b2efp15d980jsn47af833c4872',
                'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
            }
        };
        
        fetch('https://airbnb19.p.rapidapi.com/api/v1/searchProperty?category=TAB_8225&totalRecords=10&currency=USD&adults=1', options)
            .then(response => response.json())
            .then((response) => {
                setItems(response.data) 
            });
            
    }, [])

    const displayItems = items.map(destination =>(
     <DestinationItem  key={destination.id} destination={destination} title={destination.title} rating={destination.starRating} bed={destination.beds} bath={destination.bathrooms} guests={destination.listingGuestLabel} price={destination.accessibilityLabel} images={destination.images[0]}/> 
      ) )
        
    
return (
<div className="destinations"style={{background:`${color}`}}>
    
         {displayItems}    
    
</div>
)
}

export default Destinations;



