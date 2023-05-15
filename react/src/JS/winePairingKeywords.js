//vegan implementation is needed since spoonacular don't support it,

export function winePairingKeywords(input){
    const pairings = [ 
        "salmon",
        "steak",
        "salad",
        "beef",
        "pork",
        "fish",
        "tuna",
        "hamburger",
        "carbonara",
        "pizza",
        "rabbit",
        "shark",
        "octopus",
        "lobster",
        "chicken",
        "chinese",
        "italian",
        "mexican",
        "asian",
        "german",
        "african",
        "sushi",
        "seafood",
        "lamb",
        "stew",
        "omelette",
        "prawn",
        "hummus",
        "caviar",
        "cod",
        "swordfish",
        "ham",
        "perch",
        "popcorn",
        "chocolate",
        "ice cream",
        "grapes",
        "fruit",
    ]
    if(pairings.filter(pair => pair === input).length > 0)
    {
        return true; 
    }
    return false;
}
