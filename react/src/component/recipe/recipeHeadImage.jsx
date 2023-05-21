import React from "react";

import "../../SCSS/colorscheme.scss";
import "../../SCSS/recipe.scss";
import "../../SCSS/HeaderFooter.scss";

export default function HeadImage({description, recipeImage}){
    return(
        <div className="recipeBox"  id="card">
        <div className="headImage">
            <img src={recipeImage} alt={description}/>
        </div>
        </div>
        )
    }