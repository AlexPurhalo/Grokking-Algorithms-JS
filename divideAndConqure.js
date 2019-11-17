const findAPlot = (sideOne, sideTwo) => { 
  if (sideOne === sideTwo) return sideOne 
  return findAPlot(
    Math.min(sideOne, sideTwo), 
    Math.max(sideOne, sideTwo) - Math.min(sideOne, sideTwo) 
  )
}
console.log(findAPlot(1680, 680))


const sum = (fir, sec, ...rest) => sec ? sum(fir + sec, ...rest) : fir 
console.log(sum(1, 5, 9, 1))

const count = (item, ...rest) => item ? 1 + count(...rest) : 0
console.log(count(1, 2, 5, 1))

const max = (fir, sec, ...rest) => sec ? max(fir > sec ? fir : sec, ...rest) : fir
console.log(max(1, 5, 1, 2))
