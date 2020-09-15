
let pivot = (arr, start=0, end= arr.length - 1)=>{
    let pivot = arr[start]; 
    let pivotIndex = start;
    for (let i=start + 1; i<= end; i++){
        if (arr[i] < pivot ){
            pivotIndex++;
            let temp = arr[pivotIndex];
            arr[pivotIndex] = arr[i];
            arr[i] = temp;
        }
    }
    let temp = arr[start];
    arr[start]= arr[pivotIndex];
    arr[pivotIndex] = temp;
    console.log(arr);
}

pivot([50,60,-55,70,12,45, -3], 1);

//12 