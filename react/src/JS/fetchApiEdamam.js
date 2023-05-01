import axios from "axios";
export async function fetchApiEdemam(filters = [], dataFrom = 0, dataTo = 10) {
    let filterQuery;
    console.log(filters.toString())
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
        q : filterQuery != undefined ? filterQuery : "recipe",
      },

      headers: {
        // "content-type": "application/octet-stream",
        "X-RapidAPI-Key": 'df8a80b1a6msha38ff4bdfa0adc0p18c309jsn16a0454d60dc', 
        "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",

      },
    };
    try {
      const response = await axios.request(options);
      return response.data.hits;  
    } 
    catch (error) 
    {
        console.log(error.message)
        return null;
    }
}