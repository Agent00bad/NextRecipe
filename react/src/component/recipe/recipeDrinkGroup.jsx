import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/flex-container.css";
import "../../CSS/HeaderFooter.css";

import RightArrow from "./recipeArrowRight";
import LeftArrow from "./recipeArrowLeft";
import Drink from "./recipeDrink";
import RecDrinkImage from "../../Images/wine.jpg"

export  function DrinkGroup(){
    return(
        <div className="box flex-container">
            <LeftArrow/>

            <Drink
            recipeDrinkImage = {RecDrinkImage}
            />
            
            <RightArrow/>
        </div>

        )
    }