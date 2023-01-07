function merge(arr){
  if(arr.length <= 1){
    return arr
  }
  const mid = Math.floor(arr.length/2)
  return mergeSort(
    merge(arr.slice(0,mid)),
    merge(arr.slice(mid))
  )
}

function mergeSort(leftArr,rightArr){
  let merged = []
  while (leftArr.length && rightArr.length) {
    if(leftArr[0] < rightArr[0]){
      merged.push(leftArr.shift())
    }else if(leftArr[0] > rightArr[0]){
      merged.push(rightArr.shift())
    }else{
      merged.push(leftArr.shift(),rightArr.shift())
    }
  }
  return [...merged,...leftArr,...rightArr]
}

const data = [5,1,3,9,10,12,91737,1178,123,4232,199,183,314128,78163,197,7314,72,86,814,67,9172,1284]
console.log(merge(data))
