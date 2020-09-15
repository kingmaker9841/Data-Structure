
let optimizedInsertionSort = (arr)=>{
    for (let i = 1; i < arr.length; i++){
        let temp = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > temp; j--){
            arr[j+1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    console.log(arr, " is sorted")
}

optimizedInsertionSort([1,2,-2,5,5, -23, 43,8]);
// [1,2,-2,5,5,8] 
// [1,2,2,5,5,8]
// [1,1,2,5,5,8]
// [-2,1,2,5,5,8]
