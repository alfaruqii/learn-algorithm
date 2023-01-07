function partition(arr, start, end) {
  const pivot = arr[end];
  let i = start - 1;
  function swap(left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
  for (let j = start; j < arr.length; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(i, j);
    }
  }
  i++;
  swap(i, end);
  return i;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return;
  }
  let indexPivot = partition(arr, start, end);
  quickSort(arr, start, indexPivot - 1);
  quickSort(arr, indexPivot + 1, end);
}

const data = [5, 1, 2, 19, 23, 10, 4];
quickSort(data);
console.log(data);
