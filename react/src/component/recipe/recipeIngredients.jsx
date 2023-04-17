import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/flex-container.css";
import "../../CSS/HeaderFooter.css";

import RecipeImage from "../../Images/image.jpg"
import RecDrinkImage from "../../Images/wine.jpg"
export default function Ingredients(){
    return(
        <div className="boxA box-shadow">
            <h3>Ingredients:</h3>
            <div className="innerBox">
                <ul>
                    <li>Salmon</li>
                    <li>Broccoli</li>
                    <li>Carrots</li>
                    <li>Potatoes</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                    <li>Butter</li>
                </ul>
            </div>
        </div>
        )
    }