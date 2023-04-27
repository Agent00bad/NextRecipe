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
        from : dataFrom,
        to : dataTo,
      },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_KEY,
        "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com"
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response);
      console.log(response.data);
      return response.data.hits;
    } 
    catch (error) 
    {
      console.log(error);
        return error;
    }
}
