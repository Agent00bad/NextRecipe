import React, { Fragment } from "react";

import '../../css/colorscheme.css';
import '../../css/filter.css';
import '../../css/button.css';

export default function Filter() {
  /* Arrayer för alla knappar */
  const mealType = ["Breakfast", "Lunch", "Dinner"]
  const allergies = ["Gluten", "Nuts", "Milk", "Lactose", "Vegeterian", "Vegan"]
  const drinks = ["Beer", "Wine", "Milk", "Juice", "Coffee", "Tea"]

  function handleClick(i){
    /* TODO - Gör så att knappen ändrar css */
  }
    return(
        <>
            section("Meal options", mealType, true);
            <hr />
            section("Allergies/Diet", allergies, false)
            <hr />
            section("Drinks", drinks, false)
            <hr />
            section("Match drinks with food", mealType, true)
            <div className="flex-container apply-clear">
              <button id="apply-button">Apply</button>
              <button id="clear-button">Clear</button>
            </div>
      </>
    )
}

function Button({value, onButtonClick}){
  return(
    <button className="pillButton" onClick={onButtonClick}>value</button>
  );
}

function section({header, array, match}){
  <>
     <div className="flex-container">
        <h2>header</h2>
        <img className="arrow" src="Images/arrow-down.png" alt="Arrow down" />
      </div>
      <hr />
      <div className="flex-container">
        for (let i = 0; i < array.length; i++){
          <Button value = {array[i]} onButtonClick={() => handleClick()}/>
         }
         if (match) {
         /* TODO - fixa funktionen som matchar måltidstypen med vad klockan är */ 
        <Button value = "Match meal with time?" onButtonClick={() => handleClick()}/>
        }
      </div>
  </>
}

