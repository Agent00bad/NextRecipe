import React from "react";

import "../../SCSS/colorscheme.scss";
import "../../SCSS/recipe.scss";
import "../../SCSS/HeaderFooter.scss";

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