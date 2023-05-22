import React from "react";

import "../../SCSS/colorscheme.scss";
import "../../SCSS/recipe.scss";
import "../../SCSS/HeaderFooter.scss";

export default function Nutrition({nutrient = [],weight}){
    
    return(
        <div id="card">
            <div className="specifics">
                 <p><b>Per 100 g:</b></p>
                {nutritionExists(nutrient.ENERC_KCAL.label,nutrient.ENERC_KCAL.quantity,nutrient.ENERC_KCAL.unit,                     weight)}
                {nutritionExists(nutrient.FAT.label,nutrient.FAT.quantity,nutrient.FAT.unit,                     weight)}
                {nutritionExists(nutrient.CHOCDF.label,nutrient.CHOCDF.quantity,nutrient.CHOCDF.unit,                     weight)}
                {nutritionExists(nutrient.FIBTG.label,nutrient.FIBTG.quantity,nutrient.FIBTG.unit,                     weight)}
                {nutritionExists("Sugar",nutrient.SUGAR.quantity,nutrient.SUGAR.unit,                     weight)}
                {nutritionExists(nutrient.PROCNT.label,nutrient.PROCNT.quantity,nutrient.PROCNT.unit,                     weight)}
                <p><br></br></p>
                {nutritionExists(nutrient.NA.label,nutrient.NA.quantity,nutrient.NA.unit,                     weight)}
                {nutritionExists(nutrient.CA.label,nutrient.CA.quantity,nutrient.CA.unit,                     weight)}
                {nutritionExists(nutrient.MG.label,nutrient.MG.quantity,nutrient.MG.unit,                     weight)}
                {nutritionExists(nutrient.K.label,nutrient.K.quantity,nutrient.K.unit,                     weight)}
                {nutritionExists(nutrient.FE.label,nutrient.FE.quantity,nutrient.FE.unit,                     weight)}
                {nutritionExists(nutrient.ZN.label,nutrient.ZN.quantity,nutrient.ZN.unit,                     weight)}
                {nutritionExists(nutrient.P.label,nutrient.P.quantity,nutrient.P.unit,                     weight)}
                <p><br></br></p>
                {nutritionExists(nutrient.VITA_RAE.label,nutrient.VITA_RAE.quantity,nutrient.VITA_RAE.unit,                     weight)}
                {nutritionExists(nutrient.THIA.label,nutrient.THIA.quantity,nutrient.THIA.unit,                     weight)}
                {nutritionExists(nutrient.RIBF.label,nutrient.RIBF.quantity,nutrient.RIBF.unit,                     weight)}
                {nutritionExists(nutrient.NIA.label,nutrient.NIA.quantity,nutrient.NIA.unit,                     weight)}
                {nutritionExists(nutrient.VITB6A.label,nutrient.VITB6A.quantity,nutrient.VITB6A.unit,                     weight)}
                {nutritionExists(nutrient.VITB12.label,nutrient.VITB12.quantity,nutrient.VITB12.unit,                     weight)}
                {nutritionExists(nutrient.VITC.label,nutrient.VITC.quantity,nutrient.VITC.unit,                     weight)}
                {nutritionExists(nutrient.VITD.label,nutrient.VITD.quantity,nutrient.VITD.unit,                     weight)}
                {nutritionExists(nutrient.TOCPHA.label,nutrient.TOCPHA.quantity,nutrient.TOCPHA.unit,                     weight)}
                {nutritionExists(nutrient.VITK1.label,nutrient.VITK1.quantity,nutrient.VITK1.unit,                     weight)}
            </div>
        </div>
        )
    }

    function nutritionExists(Label,Value,Unit,Weight){
        if(Value > 0){
            return(<p>{Label}: {Math.ceil((Value /Weight)* 100)} {Unit}</p>)
        }
        
    }

