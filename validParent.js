function validationPar(par) {
  // return par.includes("()")
  if (par.length !== 1 || par.includes("(") || par.includes(")")) {
    let matchAll = /()/g
    for (var i = 0; i < par.length; i++) {
      console.log(par[i].match(matchAll))
    }
  }
  return false
}

console.log(validationPar("()"))
