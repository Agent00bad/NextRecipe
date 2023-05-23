import React from "react";

import "../../SCSS/colorscheme.scss";
import "../../SCSS/recipe.scss";
import "../../SCSS/HeaderFooter.scss";

export default function RecipeListCard({ingredients = []}){

        return(
            <div className="listCard" id="card">
                <h3>Ingredients</h3>
                <div className="specifics">

                            <ul>
                            {ingredients.map(ingredient => 
                                (
                                <li key={ingredient}>
                                    <b>{ingredient}</b>
                                </li>
                                )
                                )}
                            </ul>
                </div>
            </div>
            )
    }

            




