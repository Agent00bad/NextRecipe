import React from "react";

import "../../SCSS/colorscheme.scss";
import "../../SCSS/recipe.scss";
import "../../SCSS/HeaderFooter.scss";

export default function Description({description, title}){
    return(
            <div className="description">
                <h3>{title}</h3>  
                <p>{description}</p>
            </div>
        )
    }