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
        "X-RapidAPI-Key": '6964f31706msh388e7503292ec84p17abf2jsn0e139674afbd', 

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
