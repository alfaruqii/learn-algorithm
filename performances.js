// let start = performance.now()
// const subSum = (n) => {
//   let result = 0
//   for (let index = 1; index<=n; index++) {
//     result+=index
//   }
//   return result
// }
// let end = performance.now()
// console.log(end - start)
//
// console.log(subSum(10000000000))

let start = performance.now()
const subSum = (n) => {
  return (n/2)*(2+(n-1))
}
let end = performance.now()
console.log(end - start)

console.log(subSum(11))
