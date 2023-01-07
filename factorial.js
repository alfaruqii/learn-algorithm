console.log(performance.now())
const factorialFunction = (n) => {
  let result
  if(n<=1) return n
  else{
     result = n * factorialFunction(n-1)
  }
  return result
}

console.log(factorialFunction(100))
console.log(performance.now())
