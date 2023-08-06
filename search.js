function insertionSort(arr) {
  const n = arr.length;
  
  // Start with the second element (index 1) since the first element (index 0) is considered sorted.
  for (let i = 1; i < n; i++) {
    const currentElement = arr[i];
    let j = i - 1;

    // Compare the current element with the elements in the sorted part of the array.
    // Move elements that are greater than the current element one position to the right.
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element into its correct position in the sorted part of the array.
    arr[j + 1] = currentElement;
  }
}

// Example usage:
const arrayToSort = [8, 2, 5, 1, 6, 3];
insertionSort(arrayToSort);
console.log(arrayToSort); // Output: [1, 2, 3, 5, 6, 8]
