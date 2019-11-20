const breadthFirstSearch = (graph, [curr, ...rest]=graph['you'], cashed=[]) => {
  const isInCash = val => ![...cashed, ...rest].some(name => name === val)
  const isMangoSeller = name => name.slice(-1) === 'm'

  if (!curr) return null
  if (isMangoSeller(curr)) return curr 

  return breadthFirstSearch(
    graph,
    [...rest, ...graph[curr].filter(isInCash)],
    [...cashed, curr]
  )
}

const graph = {
  'you': ['bob', 'alice', 'claire'],
  'bob': ['anuj', 'peggy'],
  'alice': ['peggy'],
  'claire': ['thom', 'jonny'],
  'anuj': [],
  'peggy': [],
  'thom': [],
  'jonny': []
}

console.log(breadthFirstSearch(graph))
