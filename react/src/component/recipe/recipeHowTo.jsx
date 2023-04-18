import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/flex-container.css";
import "../../CSS/HeaderFooter.css";

export  function HowTo({instructions = []}){
    return(
        <div className="boxA box-shadow">
            <h3>How to:</h3>
            <div className="innerBox">
                <ol>
                    {instructions.map(instruction => 
                        (
                        <li>
                            <b>{instruction}</b>
                        </li>
                        )
                        )}
                    {
                    /* <li>Put salt and pepper on the salmon</li>
                    <li>Boil potatis</li>
                    <li>Put the salmon on the grill</li>
                    <li>Boil broccoli and carrots</li> */}
                </ol>
            </div>
        </div>
        )
    }