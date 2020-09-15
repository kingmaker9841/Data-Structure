
//Optimizing Bubble Sort
//When no swaps are made that means the list is sorted and we do not need to
//loop through the numbers only to check it
// then break loop

let swap = (arr, index1, index2)=> [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

let bubbleSortOptimized = (arr)=>{
    let res;

    for (let i = arr.length; i > 0; i--){
        res = true;
        for (let j = 0; j< i - 1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                swap(arr,j,j+1);
                res = false;
            }
        }
        if (res) break;
    }
    console.log(arr, " is sorted array");
}

bubbleSortOptimized([89,1,2,3,4,5,6]);