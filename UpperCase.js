// function checkUpperCase(str) {
//   const upperValid = str.toUpperCase()
//   if (str === upperValid) {
//     return true
//   }
//   return false
// }
//
// const result = checkUpperCase("uqiii")
// console.log(result)

String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase()
}

console.log("E".isUpperCase())
