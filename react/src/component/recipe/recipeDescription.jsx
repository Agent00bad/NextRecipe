import React from "react";

// import "../../CSS/colorscheme.css";
// import "../../CSS/recipe.css";
// import "../../CSS/HeaderFooter.css";

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