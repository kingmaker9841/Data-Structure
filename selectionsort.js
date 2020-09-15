
let swap = (arr, index1, index2)=> [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

let selectionSort = (arr)=>{
    for (let i = 0; i< arr.length; i++){
        let lowest = i;
        for (let j = i + 1; j< arr.length; j++){
            console.log(arr, arr[i], arr[j]);
            if (arr[i] > arr[j]){
                lowest = j;
            }
        }
        if (lowest !== i){
            console.log("Swapping");
            swap(arr, i, lowest);
        }
        console.log("First completed");
    }
    console.log(arr, " is sorted array");
}

selectionSort([0,-5, -10,1,2,3,4]);