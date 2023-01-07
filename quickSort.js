const log = console.log;
log(performance.now())
const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) {
    return
  }
  const partition = (arr, start, end) => {
    const swap = (a, b) => {
      let temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
    };
    let pivotItems = arr[end];
    let pivotIndex = start;
    for (let j = start; j < end; ++j) {
      if (arr[j] < pivotItems) {
        swap(j, pivotIndex);
        ++pivotIndex;
      }
    }
    swap(pivotIndex, end);
    return pivotIndex;
  };
  let index = partition(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
};

const myArr = [12, 2, 4, 5, 1, 9, 12, 12, 145, 10, 20, 22, 23, 17, 190, 123, 1245, 21, 1213131, 1234, 123, 12, 4234314, 123124124124, 12301240912094]
quickSort(myArr)
console.log(myArr)
log(performance.now())
