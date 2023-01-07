// function bubblesortOnce(a) {
//   // let result = a;
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//       if (a[i] < a[j]) {
//         let temp = a[i];
//         a[i] = a[j];
//         a[j] = temp;
//       }
//     }
//   }
//   return a
//   // return result;
// }

// const result = bubblesortOnce([1, 12, 5, 13, 23, 15]);
// console.log(result);

function bubblesortOnce(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > a[i + 1]) {
      let temp = a[i]
      a[i] = a[i + 1]
      a[i + 1] = temp
    }
  }
  return a
}

const secResult = bubblesortOnce([1, 12, 5, 13, 23, 15]);
console.log(secResult)
