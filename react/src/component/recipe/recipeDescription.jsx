import React from "react";

// import "../../CSS/colorscheme.css";
// import "../../CSS/recipe.css";
// import "../../CSS/HeaderFooter.css";

import "../../CSS/colorscheme.scss";
import "../../CSS/recipe.scss";
import "../../CSS/HeaderFooter.scss";

export default function Description({description, title}){
    return(
            <div className="description">
                <h3>{title}</h3>  
                <p>{description}</p>
            </div>
        )
    }