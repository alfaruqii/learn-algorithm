console.log(performance.now())
const qs = (arr) => {
  if (arr.length <= 1) return arr;
  let pivotIndex = 0;
  const pivotItems = arr[arr.length - 1];
  const lessArr = [];
  const greaterArr = [];
  for (const el of arr.slice(0, arr.length - 1)) {
    if (el < pivotItems) {
      lessArr.push(el);
    }else{
      greaterArr.push(el)
    }
  }
  return [...qs(lessArr),pivotItems,...qs(greaterArr)]
};

console.log(performance.now())
console.log(qs([12,2,4,5,1,9,12,12,145,10,20,22,23,17,190,123,1245,21]));
