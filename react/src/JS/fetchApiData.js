export async function fetchEdemamData(filters = []) {
    let filterQuery;

    if(filters > 0)
    {
        filters.map(filter => {
            filterQuery += ` ${filter}`;
        })
    }

    const axios = require("axios");
    const options = {
      method: "GET",
      url: "https://edamam-recipe-search.p.rapidapi.com/search",
      params: {
        q: filters > 0 ? filterQuery : "recipe",
      },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_KEY,
        "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
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
