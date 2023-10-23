function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function maxHeap(arr, i, n) {

    let left = 2*i;
    let right = 2*i + 1;
    let maximum;

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
        swap(arr, 0, i);
        maxHeap(arr, 0, i);
    }
    return arr
}

let arr = [23, 55, 22, 1, 97, 8, 3, 90];
heapSort(arr);

console.log(arr);