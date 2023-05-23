import React from "react";
import "../../SCSS/colorscheme.scss";
import "../../SCSS/recipe.scss";
import "../../SCSS/HeaderFooter.scss";

export default function HeadImage({alt, recipeImage}){
    return(
        <div className="headImage" id="card">
            <img src={recipeImage} alt={alt}/>
        </div>
        )
    }