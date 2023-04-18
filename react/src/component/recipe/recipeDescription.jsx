import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/flex-container.css";
import "../../CSS/HeaderFooter.css";

export  function Description({description}){
    return(
            <div className="boxA box-shadow">
                <h3>BBQ salmon with veggies</h3>
                <div className="innerBox">
                    <p>{description}</p>
                </div>
            </div>
        )
    }