

let getDigit = (num, place)=>{
    return Math.floor(Math.abs(num)/10**(place-1)) % 10;
}

let countDigit = (num)=>{
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

let mostDigit = (arr)=>{
    return countDigit(Math.max(...arr));
}

let radixSort = (arr)=>{
    let maxDigit = mostDigit(arr);
    for (let k =0; k< maxDigit; k++){
        let bucket = Array.from({length: 10}, ()=> []);
        for (let i = 0; i< arr.length; i++){
            let digit = getDigit(arr[i], k);
            bucket[digit].push(arr[i]);
        }
        arr = [].concat(...bucket);
    }
    console.log(arr);
    return arr;
}

radixSort([2,45,-5,9,32,568,1,3]);

// getDigit(-256,1);
// countDigit(-256);
// mostDigit([1,23,54,78,96,256, 1234]);