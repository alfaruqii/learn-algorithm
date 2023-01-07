const data = [];

function positiveNumber(arr) {
  if (arr.length === 0) return 0;
  let lastRes = 0;
  // console.log(arr.length) //output 4
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      continue;
    }
    lastRes += arr[i];
  }
  return lastRes;
}

const result = positiveNumber(data);
console.log(result);
