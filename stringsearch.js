

//Problem
//Given a string, count the number of times a substring appears in a string

//Approach 1:
/*
    Outer Loop through the string
        Inner Loop through the substring
            if characters do not match, break inner loop 
            if characters do match, increase the counter
    return counter
*/

let stringSearch = (string, str)=>{
    let counter = 0;
    for (let i = 0; i< string.length; i++){

        for (let j=0; j< str.length; j++){
            if (str[j] !== string[i + j]){
                break;
            }
            if (j === str.length -1){
                counter++;
            }
        }
    }
    return console.log(counter);
}

stringSearch("Hello there, my name is MIlan Panta", "MIlan");