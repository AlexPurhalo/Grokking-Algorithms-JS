// Declarative way
const quickSort = (arr) => {
  const pivot = arr[parseInt(arr.length/2)] 
  if (arr.length <= 1) return arr
  return [
    ...quickSort(arr.filter(el => el < pivot)),
    ...arr.filter(el => el === pivot), 
    ...quickSort(arr.filter(el => el > pivot))
  ]
}

// Imperative way
// const quickSort = (arr) => {
//   const pivot = arr[parseInt(arr.length/2)] 
//   const smallest = [], higher = [], pivots = []
//
//   if (arr.length <= 1) return arr
//
//   for (const item of arr) {
//     if (item < pivot) smallest.push(item)
//     if (item > pivot) higher.push(item)
//     if (item === pivot) pivots.push(item)
//   }
//
//   return [...smallest, ...pivots, ...higher]
// }

const arr = [1, 4, 51, 1, 4, 29, 19 ,4]
console.log(quickSort(arr))
