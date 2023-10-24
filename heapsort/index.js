let arr = [23, 55, 22, 1, 97, 8, 3, 90];

function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

function maxHeap(arr) {
    console.log("Creating a heap: ");
    for( let i = arr.length / 2 - 1; i>= 0; i--) {
        console.log("heapify(arr, " + i + ", " + arr.length + ");");
        heapify(arr, i, arr.length);
    }
}

function heapify(arr, i, j) {
    console.log("    i(h) = " + i + "; j(length) = " + j + ";");

    let left = i * 2 + 1;
    let right = i * 2 + 2;
    let main = i;

    console.log("    left = i * 2 + 1 = " + left + "; right = i * 2 + 2 = " + right + "; main = " + main +';');

    if (left < j && arr[left] > arr[main]) {

        main = left;
        console.log("    left < j && arr[left] > arr[main] (True) -> main = " + left + ';');
    } else {

        console.log("    left < j && arr[left] > arr[main] (False)");
    }

    if (right < j && arr[right] > arr[main]) {

        main = right;
        console.log("    right < j && arr[right] > arr[main] (True) -> main = " + right + ';');
    } else {

        console.log("    right < j && arr[right] > arr[main] (False)");
    }

    if (i != main) {

        console.log("i != main (True)");
        console.log("    Swap(" + arr[i] + ", " + arr[main] + ");");
        swap(arr, i, main);

        console.log("arr: ", arr);

        console.log("    heapify(arr, " + main + ", " + j + ");");
        heapify(arr, main, j);
    }
}

function heapSort() {
    console.log("Unsorted array: ", arr);
    maxHeap(arr);
    console.log("Let's turn the elements off from the heap by one-by-one")

    for( let i = arr.length - 1; i > 0; i--) {

        swap(arr, i, 0);
        console.log("Swap(" + arr[i] + ", " + arr[0] + ");");
        console.log("heapify(arr, 0, " + i + ");");
        heapify(arr, 0, i);
    }

    console.log("Result: ", arr);

}

heapSort();