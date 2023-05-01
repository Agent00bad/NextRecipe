import axios from "axios";

export async function fetchApiSpoonacular(mainFoodType = "steak") {
   try{
    const wineListResponse = await fetch(`https://api.spoonacular.com/food/wine/pairing?food=${mainFoodType}`,
    {
      headers : {
        // "x-api-key" : import.meta.env.VITE_SPOON_KEY,
      }
    })
    
    if(!wineListResponse.ok){
      throw new Error(`ohh no the response got lost in the mail: ${wineListResponse.status}`)
    }

    const result = await wineListResponse.json();
    const wineObject = {
      "title" : result.productMatches[0].title,
      "pairingText" : result.pairingText,
      "imageUrl" : result.productMatches[0].imageUrl,
    }
    return(wineObject); 
   }
   catch(error)
   {
    console.log(error.message);
    return null;
   }
}
