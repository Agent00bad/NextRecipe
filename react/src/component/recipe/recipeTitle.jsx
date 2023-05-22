import React from "react";

import "../../SCSS/colorscheme.scss";
import "../../SCSS/recipe.scss";
import "../../SCSS/HeaderFooter.scss";

export default function Title({cuisine, title}){
    return(
        <div  id="card">
            <h3>{title}</h3>  
            <div className="specifics">
                <p><strong>{cuisine}</strong></p>
            </div>
        </div>
        )
    }