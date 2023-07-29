function expressionMatter(a, b, c) {
  const scenarioA = a * (b + c)
  const scenarioB = (a + b) * c
  const scenarioC = a * b * c 
  const scenarioD = a + b + c 
  let result = []
  result.push(scenarioA, scenarioB, scenarioC, scenarioD)
  result = result.sort(function(a, b) {
    return b - a; 
  })
  return result[0]
}

module.exports = expressionMatter;