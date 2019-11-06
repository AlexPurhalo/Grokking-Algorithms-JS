// IMPLEMENTATION: recursively divides the searching range by half until reaching the appropriate value or overshooting the searching range:
const binarySearch = (arr, item, [low=0, high=arr.length-1]=[]) => {
  const mid = Math.floor((low + high)/2)

  if (low > high) return -1 // is overshooting the range?
  if (arr[mid] === item) return mid // is item found?

  return binarySearch(arr, item, [
    item > arr[mid] ? mid+1 : low,
    item < arr[mid] ? mid-1 : high
  ])
}


// TESTING: positive
console.log(binarySearch([2, 6, 9, 14, 21],  9)) // => 2
console.log(binarySearch([2, 6, 9, 14, 21], 21)) // => 4
console.log(binarySearch([2, 6, 9, 14, 21],  2)) // => 0
// negative
console.log(binarySearch([2, 6, 9, 14, 21],  0)) // => -1
console.log(binarySearch([2, 6, 9, 14, 21], -4)) // => -1
console.log(binarySearch([2, 6, 9, 14, 21], 40)) // => -1


// CONCEPT: Favour Binary Search over Simple Search while dealing with huge amount of sorted data
// Binary Search has logarithmic (log) runtime so its usefulness grows exponentially to growing data.
// While Simple Search has leaner `O(n)` runtime potentially causing performance gaps while dealing with growing data.
//
// EXAMPLES: Simple Search performs 8 operations in the worst case to achive the element of the array containing 8 items. Binary search deals with the same job in 3 steps (2^3 = 8 or log^2*8 = 3). If we would have 10.000 items Simple Search would finished iterating on 10.000 operation. Binary Search needs only 4 (10^4 = 10.000 or log10*1000 = 4).

