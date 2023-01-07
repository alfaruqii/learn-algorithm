function solution(number) {
  let data = [
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000
  ]
  for (let i = Object.keys(data).length; i > 0; i--) {
    if (number % data[i] === 0) {
      return data[i]
    }
  }
}

const tester = solution(900)
console.log(tester)
