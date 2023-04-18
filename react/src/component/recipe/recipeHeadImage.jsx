import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/flex-container.css";
import "../../CSS/HeaderFooter.css";

export  function HeadImage({description, recipeImage}){
    return(
        <div className="headImg">
            <img src={recipeImage} alt={description}/>
        </div>

        )
    }