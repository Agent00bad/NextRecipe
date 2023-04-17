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
            <Section header="Meal Options" array={mealType} match={true} />
            <hr />
            <Section header="Meal Allergies/Diet" array={allergies} match={false} />
            <hr />
            <Section header="Drinks" array={drinks} match={false} />
            <hr />
            <Section header="Match drinks with food" array={mealType} match={true} />
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

function ForButton(array){
  for (let i = 0; i < array.length; i++){
    <Button value = {array[i]} onButtonClick={() => handleClick()}/>
   }
}

function Section({header, array, match}){

  <>
     <div className="flex-container-horizontal">
        <h2>header</h2>
        <img className="arrow" src="Images/arrow-down.png" alt="Arrow down" />
      </div>
      <hr />
      <div className="flex-container">
        <ForButton array={array}/>
         if (match) {
         /* TODO - fixa funktionen som matchar måltidstypen med vad klockan är */ 
        <Button value = "Match meal with time?" onButtonClick={() => handleClick()}/>
        }
      </div>
  </>
}
 function filter(){
  <>
  <div>
        <hr />
        <div className="flex-container-horizontal">
          <h2>Meal Options</h2>
          <img className="arrow" src="Images/arrow-down.png" alt="Arrow down" />
        </div>
        <hr />
        <div className="flex-container-horizontal">
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
          <button>Match meal with time?</button>
        </div>
      </div>
      <div>
        <hr />
        <div className="flex-container-horizontal">
          <h2>Allergies/Diet</h2>
          <img className="arrow" src="Images/arrow-down.png" alt="Arrow down" />
        </div>
        <hr />
        <div className="flex-container-horizontal">
          <button>Gluten</button>
          <button className="selected">Nuts</button>
          <button>Milk</button>
          <button>Lactose</button>
          <button className="selected">Vegeterian</button>
          <button>Vegan</button>
        </div>
      </div>
      <div>
        <hr />
        <div lassNames="flex-container-horizontal">
          <h2>Drinks</h2>
          <img className="arrow" src="Images/arrow-down.png" alt="Arrow down" />
        </div>
        <hr />
        <div className="flex-container-horizontal">
          <button>Beer</button>
          <button>Wine</button>
          <button>Milk</button>
          <button>Juice</button>
          <button>Coffe</button>
          <button>Tea</button>
        </div>
      </div>
      <div>
        <hr />
        <div className="flex-container-horizontal">
          <h2>Match drinks with food</h2>
          <img className="arrow" src="Images/arrow-down.png" alt="Arrow down" />
        </div>
        <hr />
        <div className="flex-container-horizontal">
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
          <button>Match meal with time?</button>
        </div>
      </div>
      <div>
        <hr />
        <div className="flex-container-horizontal apply-clear">
          <button id="apply-button">Apply</button>
          <button id="clear-button">Clear</button>
        </div>
      </div>
  </>
 }
