function validBraces(data) {
  let dataArr = [...data];
  console.log(dataArr);
  if (dataArr.length === 2) {
    console.log("running");
    return (
      //   dataArr[dataArr.length - dataArr.length], dataArr[dataArr.length - 1]
      //   dataArr[dataArr.length - dataArr.length]
      dataArr[dataArr.length - dataArr.length] ===
      dataArr[dataArr.length - (dataArr.length - 1)]
    );
  }
  if (dataArr.length % 2 === 0) {
    let next = 1;
    for (let i = 0; i < dataArr.length; i++) {
      if (dataArr[i] === dataArr[i + 1]) {
        continue;
      } else {
        if (dataArr[i] !== dataArr[next++]) {
          continue;
        }
      }
    }
    // let splitSomeBraces = dataArr.slice()
  }
  return true;
}

const test = validBraces("()))");
console.log(test);
