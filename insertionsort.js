

//Pseudocode
/*----------------*/

let swap = (arr, index1, index2)=> [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

let insertionSort = (arr)=>{
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > arr[i+1]){
            console.log(arr, arr[i] , arr[i+1]);
            swap(arr, i, i+1);
            console.log(arr, "Swapped 1")
            for (let j = i - 1; j>= 0; j--){
                if (arr[j] > arr[j+1]){
                    console.log(arr, arr[j], arr[j+1]);
                    console.log(arr, " Swarpped 2")
                    swap(arr, j,  j+1);
                }   else {
                    console.log("Break")
                    break;
                }
            }
        }
    }
    console.log(arr, " is the sorted array");
}

insertionSort([-1,1,2,4,3,-6]);