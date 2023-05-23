import axios from "axios";

export async function fetchApiSpoonacular(mainFoodType) {
   try{
    const wineListResponse = await fetch(`https://api.spoonacular.com/food/wine/pairing?food=${mainFoodType}`,
    {
      headers : {
        "x-api-key" : "c3173fb9e93d40ed8c075531ea5dab88",
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
