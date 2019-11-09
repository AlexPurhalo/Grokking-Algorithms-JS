const someKey = (box) => box.some(
  item => item === 'key' 
    ? true  // base case
    : item.length && someKey(item) // base then recrusive case
)

// const someKey = (box) => {
//   for (const item of box) {
//     if (item === 'key') return true
//     if (item.length) return someKey(item)
//     return false
//   }
// }
  
// const someKey = (pile) => {
//   let isKeyFound = false
//
//   // untill key is found or boxes are exosted 
//   while (!isKeyFound && pile.length) { 
//     const box = pile.shift() // tackle a first item
//
//     if (box.length) { // if box isn't empty
//       for (let item of box) {
//         if (item === 'key') {
//           isKeyFound = true 
//         }
//         pile.push(item) // put to the pile
//       }
//     }
//   }
//
//   return isKeyFound
// }

console.log(someKey([[[], [[]], [], 'key' ]]))
