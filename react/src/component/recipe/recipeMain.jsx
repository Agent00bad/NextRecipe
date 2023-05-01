import React from "react";

import "../../SCSS/colorscheme.scss";
import "../../SCSS/recipe.scss";
import "../../SCSS/HeaderFooter.scss";
import HeadImage from "./recipeHeadImage";
import Description from "./recipeDescription";
import DrinkGroup from "./recipeDrinkGroup";
import RecipeImage from "../../Images/image.jpg";
import RecipeListCard from "./recipeListCard";
import RecDrinkImage from "../../Images/wine.jpg";
import { Link, useLocation } from "react-router-dom";

const ingredientsList = ["Carrots", "Potatoes", "Pasta", "Onion", "Rice"];
const HowToList = ["Boil the potatoes", "Skin the carrots"];
let {state} = useLocation();

export default function Recipe() {
  return (
    <div className="main recipe">
      {/* Head Image */}
      <HeadImage description="HeadDesciption" recipeImage={state.recipe.image}/>

      {/* Description */}
      <Description description="Description" title={state.recipe.label} />

      {/* Recommended Drink */}
      <DrinkGroup
        drinkImage={RecDrinkImage}
        drinkDescription="The finest wine the house has to offer"
        drinkTitle="The wine of the house"
      />

      {/* Ingredients */}
      <RecipeListCard isOrdered={false} Listitems={ingredientsList} />

      {/* How to */}
      <RecipeListCard isOrdered={true} Listitems={HowToList} />
    </div>
  );
}
