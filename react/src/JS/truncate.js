/*********************** 
 * Korta ner en string
**************************/
export function truncate(text, maxLength){
    if(text.length > maxLength){
        return text.slice(0, maxLength) + "...";
    }
    else{
        return text;
    }
}