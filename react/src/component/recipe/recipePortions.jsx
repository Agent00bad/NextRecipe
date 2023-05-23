import React from "react";

import "../../SCSS/colorscheme.scss";
import "../../SCSS/recipe.scss";
import "../../SCSS/HeaderFooter.scss";

export default function Portion({nutrient = [], portions, weight}){
    let caloriesPerPortion;
    caloriesPerPortion = nutrient.ENERC_KCAL.quantity / portions
    return(
            <div id="card">
                <div className="specifics">
                    <p><strong>Number of servings:</strong> {portions}</p>

                    <p>{Math.ceil(caloriesPerPortion) + " kcal/serving"}</p>
                    <p>{Math.ceil(weight/portions)} g/serving</p>
                </div>
            </div>
        )
    }