function expressionMatter(a, b, c) {
  const scenarioA = a * (b + c)
  const scenarioB = (a + b) * c
  const scenarioC = a * b * c 
  let result = []
  result.push(scenarioA, scenarioB, scenarioC)
  result = result.sort(function(a, b) {
    return b - a; 
  })
  return result[0]
}

module.exports = expressionMatter;