let arr = [23, 55, 22, 1, 97, 8, 3, 90];

function printArray(arr) {
    console.log("[ ");
    for (let j = 0; j < arr.length; j++) {
        console.log(arr[j]);
        if(j + 1 < arr.length) console.log(", ");
        
    }
    console.log("]");
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function maxHeap(arr, i, n) {

    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let maximum = i;

    if (right<n) {
        if(arr[left]>=arr[right]) {
            maximum = left
        }
        else{
            maximum = right;
        }
    }
    else if (left<n) {
        maximum = left;
    }
    else return;
    if(arr[i]<arr[maximum]) {
        swap(arr, i, maximum)
        maxHeap(arr, maximum, n);
    }
    return;
}

function heapSort(arr) {

    let n = arr.length

    for (let i = Math.floor(n/2) - 1; i >=1; i--) {
        maxHeap(arr, i, n);
    }
    for (let i = n-1; i >= 0; i--) {
        swap(arr, i, 0);
        maxHeap(arr, 0, i);
    }
    console.log("Result: ")
    return arr
}

console.log("Начальный массив: ");
printArray(arr);
heapSort(arr);
console.log(printArray);






