import React from "react";

// import "../../CSS/colorscheme.css";
// import "../../CSS/recipe.css";
// import "../../CSS/HeaderFooter.css";

import "../../CSS/colorscheme.scss";
import "../../CSS/recipe.scss";
import "../../CSS/HeaderFooter.scss";

export default function RecipeListCard({isOrdered, Listitems = []}){

    if(isOrdered === true)
    {
        return(
            <div className="listCard">
            <h3>HowTo:</h3>
            <div className="listCard-innerBox">
                    <ol>
                    {Listitems.map(Listitem => 
                        (
                        <li key={Listitem}>
                            <b>{Listitem}</b>
                        </li>
                        )
                        )}
                    </ol>
            </div>
        </div>

        )    
    }
    
    else if(isOrdered === false);{
        return(
            <div className="listCard">
                <h3>Ingredients:</h3>
                <div className="listCard-innerBox">
                        <ul>
                        {Listitems.map(Listitem => 
                            (
                            <li key={Listitem}>
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

            




