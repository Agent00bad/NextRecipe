import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/flex-container.css";
import "../../CSS/HeaderFooter.css";

import RecipeImage from "../../Images/image.jpg"
import RecDrinkImage from "../../Images/wine.jpg"
export default function Drink(){
    return(
        <div className="boxB box-shadow" id="recommendedDrinkBox">
                <h3>Recommended drink</h3>
            <div className="RecDTwo img-responsive">
                    <img src={RecDrinkImage} alt="No Image"></img>
            </div>
            <div className="boxB flex-container flex-wrap">
                <div className="RecDOne">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae in nesciunt dolor eum sapiente blanditiis veniam incidunt illum. Labore ratione quae voluptate illum odio quidem odit eligendi harum modi obcaecati?</p>
                </div>
            </div>
        </div>
        )
    }