import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/flex-container.css";
import "../../CSS/HeaderFooter.css";

import RecipeImage from "../../Images/image.jpg"
import RecDrinkImage from "../../Images/wine.jpg"
export default function HeadImage(){
    return(
        <div className="headImg">
            <img src={RecipeImage} alt="Plate with salmon, potatoes, carrots and broccoli"/>
        </div>

        )
    }