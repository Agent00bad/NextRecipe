import React from "react";

import "../../CSS/colorscheme.css";
import "../../CSS/recipe.css";
import "../../CSS/flex-container.css";
import "../../CSS/HeaderFooter.css";
export default function RecipeListCard({isOrdered, Listitems = []}){

    if(isOrdered === true)
    {
        return(
            <div className="boxA box-shadow">
            <h3>HowTo:</h3>
            <div className="innerBox">
                    <ol>
                    {Listitems.map(Listitem => 
                        (
                        <li>
                            <b>{Listitem}</b>
                        </li>
                        )
                        )}
                    </ol>
            </div>
        </div>

        )    
    }
    
    else(isOrdered === false);{
        return(
            <div className="boxA box-shadow">
                <h3>Ingredients:</h3>
                <div className="innerBox">
                        <ul>
                        {Listitems.map(Listitem => 
                            (
                            <li>
                                <b>{Listitem}</b>
                            </li>
                            )
                            )}
                        </ul>
                </div>
            </div>
            )
    }
    }

            




