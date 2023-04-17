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
        <div className="boxParent flex-container">
            <LeftArrow/>

            <Drink/>
            {/* <div className="boxB box-shadow" id="recommendedDrinkBox">
                <h3>Recomended drink</h3>

                <div className="RecDTwo img-responsive">
                        <img src={RecDrinkImage} alt="No Image"></img>
                </div>
                <div className="boxB flex-container flex-wrap">
                    <div className="RecDOne">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae in nesciunt dolor eum sapiente blanditiis veniam incidunt illum. Labore ratione quae voluptate illum odio quidem odit eligendi harum modi obcaecati?</p>
                    </div>
                </div>
            </div> */}

            <RightArrow/>
        </div>

        )
    }