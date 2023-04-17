import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/flex-container.css";
import "../../CSS/HeaderFooter.css";

import RightArrow from "./recipeArrowRight";
import LeftArrow from "./recipeArrowLeft";
import Drink from "./recipeDrink";
import RecipeImage from "../../Images/image.jpg"
import RecDrinkImage from "../../Images/wine.jpg"
export default function DrinkGroup(){
    return(
        <div className="box flex-container">
            <LeftArrow/>

            <Drink/>

            <RightArrow/>
        </div>

        )
    }