// **Eloquent Solution**:
const selectionSort = (items) => {
  items.forEach((val, i, arr) => {
    const smallest = Math.min(...arr.slice(i))
    const smallestIdx = arr.indexOf(smallest)

    if (arr[i] > arr[smallestIdx]) {
      const temp = arr[i]
      arr[i] = arr[smallestIdx]
      arr[smallestIdx] = temp
    }
  })

  return items
}

// **Standard Solution**:
// const selectionSort = (arr) => {
//   for (let i=0; i <= arr.length-1; i++) { 
//     // find the idnex of the smallest element
//     let smallestIdx = i
//     for (let j=i; j <= arr.length-1; j++) {
//       if (arr[j] < arr[smallestIdx]) { 
//         smallestIdx = j
//       }
//     }
//
//     // if element if current iteration isn't smallest swap them
//     if (arr[i] > arr[smallestIdx]) {
//       let temp = arr[i]
//       arr[i] = arr[smallestIdx]
//       arr[smallestIdx] = temp
//     }
//   }
//
//   return arr
// }

console.log( // [ 14, 29, 56, 72, 92, 98 ] 
  selectionSort([29, 72, 98, 14, 92, 56]) 
) 

// Arrays are good for reading data, as example this `arr[9]` takes constant runtime `O(1)` because an array knows value under a ceration index, `9` in our case. Lists do the same job in `O(n)` runtime. That happens because list items should notify each others neighbour untill acces the interesting element. 
// Lists are good at insertion and delition, those operations take constant runtime such we don't have to worry about indexing. At the same time arrays aren't good at those operations. Each time when insertion or delition is occured an array need to reorder its indexes, so it takes `O(n)` runtime.

