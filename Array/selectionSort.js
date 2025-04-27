// Selection Sort Explanation:
// Selection sort is a simple sorting algorithm. It works by dividing the input array into two parts: 
// the sorted part and the unsorted part. Initially, the sorted part is empty, and the unsorted part 
// is the entire array. The algorithm repeatedly selects the smallest (or largest, depending on the order) 
// element from the unsorted part and moves it to the end of the sorted part. This process continues 
// until the entire array is sorted.

// Example array for performing insertion sort:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array:", arr);

// Outer loop for the sorted section
for(let i=0;i<arr.length;i++){
    // Assume the first element of the unsorted section is the minimum
    let minIndex = i;
    
    // Find the index of the minimum element in the remaining unsorted section
    for(let j=i+1; j<arr.length;j++){
        if (arr[j] <arr[minIndex]) {
            // update minIndex if smaller element is found
            minIndex = j;
        }
    }
    // swap the found element with the first element of the unsorted section
    if (minIndex !== i) {
        // swap only if needed
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
    }
}


console.log("Sorted Array:", arr);