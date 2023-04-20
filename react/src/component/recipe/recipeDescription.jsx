import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/HeaderFooter.css";

export default function Description({description, title}){
    return(
            <div className="description">
                <h3>{title}</h3>  
                <p>{description}</p>
            </div>
        )
    }