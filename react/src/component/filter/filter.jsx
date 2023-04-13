import React, { Fragment } from "react";

function Filter() {
    return(
        <Fragment>
        <div>
            <div className="flex-container">
            <h2>Meal Options</h2>
            <img className="arrow" src="Images/arrow-down.png" alt="Arrow down" />
            </div>
            <hr />
            <div className="flex-container">
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Dinner</button>
            <button>Match meal with time?</button>
            </div>
        </div>
        <div>
            <hr />
            <div className="flex-container">
            <h2>Allergies/Diet</h2>
            <img className="arrow" src="Images/arrow-down.png" alt="Arrow down" />
            </div>
            <hr />
            <div className="flex-container test">
            <button>Gluten</button>
            <button className="selected">Nuts</button>
            <button>Milk</button>
            <button>Lactose</button>
            <button className="selected">Vegeterian</button>
            <button>Vegan</button>
            </div>
        </div>
        <div>
            <hr />
            <div className="flex-container test">
            <h2>Drinks</h2>
            <img className="arrow" src="Images/arrow-down.png" alt="Arrow down" />
            </div>
            <hr />
            <div className="flex-container test2">
            <button>Beer</button>
            <button>Wine</button>
            <button>Milk</button>
            <button>Juice</button>
            <button>Coffe</button>
            <button>Tea</button>
            </div>
        </div>
        <div>
            <hr />
            <div className="flex-container">
            <h2>Match drinks with food</h2>
            <img className="arrow" src="Images/arrow-down.png" alt="Arrow down" />
            </div>
            <hr />
            <div className="flex-container test3">
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Dinner</button>
            <button>Match meal with time?</button>
            </div>
        </div>
        <div>
            <div className="flex-container apply-clear">
            <button id="apply-button">Apply</button>
            <button id="clear-button">Clear</button>
            </div>
        </div>
    </Fragment>
    )
}

export default Menu;