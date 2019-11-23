const breadthFirstSearch = ({ graph, predicator },[curr, ...rest] = Object.values(graph)[0], cashed=[]) => {
  const isInCash = val => ![...cashed, ...rest].some(name => name === val)
  if (!curr) return null
  if (predicator(curr)) return curr 
  return breadthFirstSearch(
    { graph, predicator },
    [...rest, ...graph[curr].filter(isInCash)],
    [...cashed, curr]
  )
}

console.log(
  breadthFirstSearch({
    graph: {
      'Twin Piks': ['#44 bus stop', '#33 bus stop'],
      '#44 bus stop': ['#28 bus stop'],
      '#33 bus stop': ['#51 bus stop', '#381 bus stop'],
      '#28 bus stop': ['Golden Gate Bridge'],
      '#51 bus stop': ['#28 bus stop'],
      '#381 bus stop': ['#28 bus stop'],
      'Golden Gate Bridge': []
    }, 
    predicator: place => /Golden Gate Bridge/.test(place)
  })
)

console.log(
  breadthFirstSearch({
    graph: {
      'you': ['bob', 'alice', 'claire'],
      'bob': ['anuj', 'peggy'],
      'alice': ['peggy'],
      'claire': ['thom', 'jonny'],
      'anuj': [],
      'peggy': [],
      'thom': [],
      'jonny': []
    },
    predicator: name => name.slice(-1) === 'm' 
  })
)

