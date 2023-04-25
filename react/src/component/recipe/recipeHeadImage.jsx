import React from "react";

// import "../../CSS/colorscheme.css";
// import "../../CSS/recipe.css";
// import "../../CSS/HeaderFooter.css";

import "../../SCSS/colorscheme.scss";
import "../../SCSS/recipe.scss";
import "../../SCSS/HeaderFooter.scss";

export default function HeadImage({description, recipeImage}){
    return(
        <div className="headImage">
            <img src={recipeImage} alt={description}/>
        </div>

        )
    }