import axios from "axios";
export async function fetchApiEdemam(filters = [], dataFrom, dataTo) {
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
        // "content-type": "application/octet-stream",

        "X-RapidAPI-Key": 'a6a16985dfmsh18ba65f5dd0382cp127f87jsnbdc707f6f6c7', 
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
