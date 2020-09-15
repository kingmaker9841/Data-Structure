
let swap = (arr, index1, index2)=>{
    return [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

let bubbleSort = (arr)=>{
    for (let i = arr.length; i>0; i--){
        for (let j = 0; j< i - 1; j++){
            console.log(arr, arr[j] , arr[j+1]);
            if (arr[j] > arr[j+1]){
                swap(arr, j , j+1);
            }
        }
    }
    console.log(arr);
}

bubbleSort([5,-9,-6,-58]);

