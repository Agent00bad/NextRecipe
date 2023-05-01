export default function ApiCall(){
    let apiArray = []
    apiArray = fetch('https://api.edamam.com/api/recipes/v2?type=public&app_id=82373417&app_key=f5b66c5603a55096eec491b0f21113c9&mealType=Breakfast')
    apiArray.then(res => {
    if (res.ok){
        console.log('SUCESS')
        res.json()
        // .then(data => console.log(data))
        .catch(error => console.log('ERROR'))
        apiArray = apiArray.json()
        return apiArray
    }
    else{
        console.log('FAILURE')
    }
    
})
}