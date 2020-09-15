

let binarySearch = (arr, element)=>{
    let left = 0, right = arr.length - 1;
    while (left <= right){
        let middle = Math.floor((left + right)/ 2);
        if (arr[middle] === element){
            return console.log(`Element ${element} found at index ${middle}`);
        }else if (element > arr[middle]){
            left = middle + 1;
        }else{
            right = middle - 1;
        }
    }
    return console.log("No such elements found");
}

binarySearch([1,2,3,4,5,6,7,8,9], 50);