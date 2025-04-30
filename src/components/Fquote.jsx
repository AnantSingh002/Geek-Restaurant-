import React, { useState } from 'react'
import './quote.css'
import restaurantData  from './restaurant.js';

function Fquote() {
  const[term,setTerm] = useState("");
  const[restaurant,setRestaurant] = useState(restaurantData);

  function handelClick(){
    let result = restaurantData.filter((obj)=>{
      return (
      obj.name.toLowerCase().includes(term) ||
      obj.type_of_food.toLowerCase().includes(term) ||
      obj.address.toLowerCase().includes(term) ||
      obj["address line 2"].toLowerCase().inclobj
      );
    });

    setRestaurant(result);
  }


  return (
    <div>
      <h1>List of Restaurants</h1>
      <input type="text" value={term}  placeholder="search resturant" onChange={(e)=>{setTerm(e.target.value)}} />
      <button onClick={handelClick}>Search</button>
      <ul>
        {restaurant.map((restaurant) => (
          <li key={restaurant._id.$oid}> {/* It's good practice to have a unique key when mapping */}
            <h2>{restaurant.name}</h2>
            <p>Type: {restaurant.type_of_food}</p>
            <p>Address: {restaurant.address}, {restaurant["address line 2"]}</p>
            <p>Rating: {restaurant.rating}</p>
            <a href={restaurant.URL} target="_blank" rel="noopener noreferrer">View Menu</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fquote
