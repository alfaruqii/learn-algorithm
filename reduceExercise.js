let dataTest = {
  ford: true,
  honda: true,
  yamaha: true,
  sasa: false
}

function isVehicle(data) {
  const obj = Object.keys(data).reduce((prev, next) => {
    if (data[next] === true) {
      return { ...prev, [next]: data[next] }
    }
    return prev
  }, {})
  return obj
}

const result = isVehicle(dataTest)
console.log(result)
