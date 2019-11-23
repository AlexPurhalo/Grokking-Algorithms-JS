const findWeightless = ({ graph, statement }, key = Object.keys(graph)[0], num=0) => {
  if (statement(key)) return num
  return Math.min(
    ...graph[key].reduce((acc, { spot, weight }) => [
      ...acc, findWeightless({ graph, statement }, spot, num + weight)
    ], [])
  )
}


console.log(
  findWeightless({ 
    graph: {
      'a': [{ weight: 1,  spot: 'b' }, { weight: 3, spot: 'e' }],
      'b': [{ weight: 2,  spot: 'c' }, { weight: 3, spot: 'f' }],
      'e': [{ weight: 4,  spot: 'f' }                          ],
      'c': [{ weight: 10, spot: 'd' }                          ],
      'f': [{ weight: 1,  spot: 'd' }                          ],
      'd': []
    }, statement: (value) => value === 'd' }
  )
)
