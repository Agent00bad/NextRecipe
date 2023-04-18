import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/flex-container.css";
import "../../CSS/HeaderFooter.css";
import HeadImage from "./recipeHeadImage";
import Description from "./recipeDescription";
import DrinkGroup from "./recipeDrinkGroup";
import RecipeImage from "../../Images/image.jpg"
import RecDrinkImage from "../../Images/wine.jpg"
import RecipeListCard from "./recipeListCard";

const ingredientsList = ["Carrots", "Potatoes", "Pasta", "Onion", "Rice"] 
const HowToList = ["Boil the potatoes", "Skin the carrots"]


export default function Recipe(){
    return(
        <div className="center">

            {/* Head Image */}
                <HeadImage
                description = "HeadDesciption"
                recipeImage = {RecipeImage}
                />
            
            {/* Description */}
                <Description
                description = "Description"
                title= "Title"
                />

            {/* Recommended Drink */}
                <DrinkGroup
                />

            {/* Ingredients */}
                <RecipeListCard
                isOrdered = {false}
                Listitems = {ingredientsList}                    
                />
            
            {/* How to */}
                <RecipeListCard
                isOrdered = {true}
                Listitems = {HowToList}
                />

        </div>
    )
}