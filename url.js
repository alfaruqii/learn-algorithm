function checkSomeUrl(url) {
  let matchSomeWordFirst = /(https?|www)?(:|\.)?(\/\/)?(www\.)?\.?/;
  let matchSomeWordTwo = /(\.|\/)(\w)+/;
  // let regexResult = url.match(matchSomeWordFirst)
  console.log(url.match(matchSomeWordFirst));
  let sliceRes = url.slice(url.match(matchSomeWordFirst)[0].length);
  console.log(sliceRes);
  // console.log(sliceRes.match(matchSomeWordTwo));
  console.log(sliceRes.match(matchSomeWordTwo));
  // console.log(sliceRes.length);
  // console.log(
  //   sliceRes.slice(0, sliceRes.indexOf(sliceRes.match(matchSomeWordTwo)[0]))
  // );
  // console.log(sliceRes);
  if (typeof url === "string" && url.match(matchSomeWordFirst)) {
    // return url.slice;
    return sliceRes.slice(
      0,
      sliceRes.indexOf(sliceRes.match(matchSomeWordTwo)[0])
    );
  }
  return `expectiing an url but given ${url}`;
}

let result = checkSomeUrl("https://allaroundthewww.com/some/path");
console.log(result);
