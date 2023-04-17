import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/flex-container.css";
import "../../CSS/HeaderFooter.css";
import HeadImage from "./recipeHeadImage";
import Description from "./recipeDescription";
import DrinkGroup from "./recipeDrinkGroup";
import Ingredients from "./recipeIngredients";
import HowTo from "./recipeHowTo";
import RecipeImage from "../../Images/image.jpg"
import RecDrinkImage from "../../Images/wine.jpg"
export default function Recipe(){
    return(
        <div className="center">

            {/* Head Image */}
                <HeadImage/>
            
            {/* Description */}
                <Description/>

            {/* Recommended Drink */}
                <DrinkGroup/>

            {/* Ingredients */}
                <Ingredients/>
            
            {/* How to */}
                <HowTo/>

        </div>
    )
}