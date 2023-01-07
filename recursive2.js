const data = [
  {
    animals: "animals",
    parents: null,
  },
  {
    id: "cat",
    parents: "animals",
  },
  {
    id: "dog",
    parents: "animals",
  },
  {
    id: "himalaya",
    parents: "cat",
  },
  {
    id: "doberman",
    parents: "dog",
  },
];

const reskursiveFunc = (parent, id) => {
  let node = {};
  parent
    .filter((item) => {
      item.parents === id;
    })
    .forEach((item) => reskursiveFunc(parent, item.id));
  return node;
};

function incrementInSomeArr(n) {
  let arr = [];
  for (let i = 1; i <= n; ++i) {
    arr.push(i);
  }
  console.log(arr);
}

function incrementInSomelimitRecursion(n, arr = []) {
  if (n <= 0) {
    console.log("got the limit");
    return arr;
  }
  console.log(n);
  incrementInSomelimitRecursion(--n, ...arr.map(n));
}

console.log(incrementInSomelimitRecursion(10));
