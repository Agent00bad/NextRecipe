import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/flex-container.css";
import "../../CSS/HeaderFooter.css";

import RecDrinkImage from "../../Images/wine.jpg"
export  function Drink({description, recipeDrinkImage}){
    return(
        <div className="boxB box-shadow" id="recommendedDrinkBox">
                <h3>Recommended drink</h3>
            <div className="RecDTwo img-responsive">
                    <img src={recipeDrinkImage} alt="No Image"></img>
            </div>
            <div className="boxB flex-container flex-wrap">
                <div className="RecDOne">
                    <p>{description}</p>
                </div>
            </div>
        </div>
        )
    }