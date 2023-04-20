import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/HeaderFooter.css";

import RecDrinkImage from "../../Images/wine.jpg"
export default  function Drink({drinkDescription, drinkImage, drinkTitle}){
    return(
        <div className="drinkBox" id="recommendedDrinkBox">
                <h3>Recommended drink</h3>
                <h4>{drinkTitle}</h4>
            <div className="drinkImage">
                    <img src={drinkImage} alt="No Image"></img>
            </div>
            
            <div className="drinkDescription">
                    <p>{drinkDescription}</p>
            </div>
        </div>
        )
    }