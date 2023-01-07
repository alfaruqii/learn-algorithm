function generateShape(integer) {
  let str = "";
  for (let i = 0; i < integer ** 2; i++) {
    if (i % integer === 0) {
      str += "\n";
    }
    str += "+";
  }
  return str.trim();
  // return ("+".repeat(integer) + "\n").repeat(integer).trim();
}

const tester = generateShape(10);
console.log(tester);
