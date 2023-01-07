const log = console.log;
function validBraces(braces) {
  let result = {
    rightPar: [],
    leftPar: [],
    rightCur: [],
    leftCur: [],
    rightBrac: [],
    leftBrac: []
  }
  braces.split("").map((brace) => {
    if (brace === "(") {
      result.leftPar.push(brace)
    }
    if (brace === ")") {
      result.rightPar.push(brace)
    }
    if (brace === "{") {
      result.leftCur.push(brace)
    }
    if (brace === "]") {
      result.rightCur.push(brace)
    }
    if (brace === "{") {
      result.leftBrac.push(brace)
    }
    if (brace === "}") {
      result.rightBrac.push(brace)
    }
  })
  for (let key in result) {
    if (result.hasOwnProperty(key)) {
      if (result[key].length === result[key++].length) {
        return true
      }
    }
  }
  return false
}

const tester = validBraces("()");
console.log(tester);
