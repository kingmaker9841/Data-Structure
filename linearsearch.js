

let linearSearch = (arr, val)=>{
    for (let i =0; i<arr.length; i++){
        if (arr[i]=== val){
            return console.log(`${val} found in index ${i}`);
        }
    }
    return console.log("Not found");
}

linearSearch([1,2,3,4,5,6,7,8,9,10], 5);