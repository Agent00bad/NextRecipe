import React from "react";

// import "../../CSS/colorscheme.css";
// import "../../CSS/recipe.css";
// import "../../CSS/HeaderFooter.css";

import "../../CSS/colorscheme.scss";
import "../../CSS/recipe.scss";
import "../../CSS/HeaderFooter.scss";

import RightArrow from "./recipeArrowRight";
import LeftArrow from "./recipeArrowLeft";
import Drink from "./recipeDrink";


export default  function DrinkGroup({drinkImage,drinkDescription,drinkTitle}){
    return(
        <div className="drinkGroup">
            <LeftArrow/>

            <Drink
            drinkImage = {drinkImage}
            drinkDescription = {drinkDescription}
            drinkTitle={drinkTitle}
            />

            <RightArrow/>
        </div>

        )
    }