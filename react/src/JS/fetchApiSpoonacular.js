import axios from "axios";

export async function fetchApiSpoonacular(mainFoodType) {
   try{
    const wineListResponse = await fetch(`https://api.spoonacular.com/food/wine/pairing?food=${mainFoodType}`,
    {
      headers : {
        "x-api-key" : "e31f3359bbd544e58009231dfbd6086d",
      }
    })
    if(!wineListResponse.ok){
      throw new Error(`ohh no the response got lost in the mail: ${wineListResponse.status}`)
    }

    const result = await wineListResponse.json();
    const wineObject = {
      "title" : result.productMatches[0].title,
      "description" : result.pairingText,
      "image" : result.productMatches[0].imageUrl,
    }
    return(wineObject); 
   }
   catch(error)
   {
    console.log(error.message);
    return null;
   }
}
