import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/flex-container.css";
import "../../CSS/HeaderFooter.css";
import {HeadImage} from "./recipeHeadImage";
import {Description} from "./recipeDescription";
import {DrinkGroup} from "./recipeDrinkGroup";
import {Ingredients} from "./recipeIngredients";
import {HowTo} from "./recipeHowTo";
import {RecipeImage} from "../../Images/image.jpg"
import RecDrinkImage from "../../Images/wine.jpg"
export default function Recipe(){
    return(
        <div className="center">

            {/* Head Image */}
                <HeadImage
                description = {"Hej på dig"}
                recipeImage = {RecipeImage}
                />
            
            {/* Description */}
                <Description
                description = "asdasdasd"
                />

            {/* Recommended Drink */}
                <DrinkGroup
                />

            {/* Ingredients */}
                <Ingredients
                ingredients = {["Salmon","Broccoli", "Carrots", "Potatoes", "Salt", "Pepper", "Butter"]}                    
                />
            
            {/* How to */}
                <HowTo
                instructions = {["Put salt and pepper on the salmon", "Boil potatoes", "Put the salmon on the grill", "Boil broccoli and carrots"]}
                />

        </div>
    )
}