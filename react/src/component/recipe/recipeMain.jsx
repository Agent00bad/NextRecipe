import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/HeaderFooter.css";
import HeadImage from "./recipeHeadImage";
import Description from "./recipeDescription";
import DrinkGroup from "./recipeDrinkGroup";
import RecipeImage from "../../Images/image.jpg"
import RecipeListCard from "./recipeListCard";
import RecDrinkImage from "../../Images/wine.jpg"

const ingredientsList = ["Carrots", "Potatoes", "Pasta", "Onion", "Rice"] 
const HowToList = ["Boil the potatoes", "Skin the carrots"]


export default function Recipe(){
    return(
        <div className="main">

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
                drinkImage={RecDrinkImage}
                drinkDescription="The finest wine the house has to offer"
                drinkTitle="The wine of the house"
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