import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/flex-container.css";
import "../../CSS/HeaderFooter.css";

export  function Ingredients({ingredients = []}){
    return(
        <div className="boxA box-shadow">
            <h3>Ingredients:</h3>
            <div className="innerBox">
                <ul>
                {ingredients.map(ingredient => 
                        (
                        <li>
                            <b>{ingredient}</b>
                        </li>
                        )
                        )}

                </ul>
            </div>
        </div>
        )
    }