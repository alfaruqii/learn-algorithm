const itungVarians = (data = []) => {
  const sumPopulation = data.reduce((acc, next) => acc + next)
  const sumFrec = data.length
  const mean = sumPopulation / sumFrec
  let varian = 0
  data.forEach((item) => {
    if (typeof (item) === "string") return "one of the item is unknown"
    varian += (item - mean) ** 2 / sumFrec
  })
  return Math.round(varian)
}

const result = itungVarians([1, 5, 6, 4, 5])
console.log(result)
