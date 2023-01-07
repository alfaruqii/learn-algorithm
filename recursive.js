// function incrementRecursive(start){
//   if(start <= 0){
//     return 
//   }
//   console.log(start)
//   incrementRecursive(--start)
//   //value already 6-1 = 5
//   //because of pre increment
// }

function withLoop(grr){
  for(let i = 1;i<=grr;i++){
    console.log(i)
  }
}

function withRecursion(grr,i=1){
  if(i>=grr){
    return
  }
  console.log(i)
  withRecursion(grr-i,++i)
}

withRecursion(6)
