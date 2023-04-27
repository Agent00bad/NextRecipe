import axios from "axios";
export async function fetchEdemamData(filters = []) {
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
      url: "https://edamam-recipe-search.p.rapidapi.com/search",
      params: {
        q: filterQuery != undefined ? filterQuery : "recipe",
      },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_KEY,
        "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com"
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
