import React from "react";

// import "../../CSS/colorscheme.css";
// import "../../CSS/recipe.css";
// import "../../CSS/HeaderFooter.css";

import "../../CSS/colorscheme.scss";
import "../../CSS/recipe.scss";
import "../../CSS/HeaderFooter.scss";

export default function HeadImage({description, recipeImage}){
    return(
        <div className="headImage">
            <img src={recipeImage} alt={description}/>
        </div>

        )
    }