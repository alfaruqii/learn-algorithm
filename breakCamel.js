function solution(string) {
  if (string.length === 0) {
    return string;
  }
  let stringgotSplit = string.split("");
  // console.log(string === stringgotSplit.join("")); //output true
  //this idea need more work
  // console.log(string)
  // string.forEach((item, index) => {
  //   if (item !== item.toUpperCase()) {
  //     return string
  //   } else {
  //     string[index] += "\n"
  //     return string
  //   }
  // })
  //this idea need more work
  for (let i = 0; i < string.length; i++) {
    if (stringgotSplit[i] === stringgotSplit[i].toUpperCase()) {
      // return string
      stringgotSplit[i - 1] += " ";
      continue;
    } else {
      continue;
    }
  }
  return stringgotSplit.join("");
}

const resultTesting = solution("camelCasingTest");
console.log(resultTesting);
