import axios from "axios";
export async function fetchSpoonacularData(filters = []) {
    let filterQuery;
    console.log(filters.toString())
    //filters = ["Breakfast", "Lunch"]
    if(filters.length > 0)
    {
        filters.map((filter) => {
            
            filterQuery != undefined ? (filterQuery += ` ${filter}`) : (filterQuery = `${filter}`);
        })
    }
    
    const options = {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
      params: {
        q: filterQuery != undefined ? filterQuery : "recipe",
      },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_KEY,
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
      },
    };
    try {
      const response = await axios.request(options);
      return response.data;
    } 
    catch (error) 
    {
        return error;
    }
}
