console.log(performance.now());
const fibonacchi = (x) => {
  if (x >= 3) {
    return fibonacchi(x - 1) + fibonacchi(x - 2);
  }
  return 1;
};

console.log(fibonacchi(40));

console.log(performance.now());
