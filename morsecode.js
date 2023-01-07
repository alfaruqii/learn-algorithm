let decodeMorse = function (morseCode) {
  let result = morseCode.split(" ");
  let lastResult = "";
  let spaceCount = 0;
  console.log(result);
  //your code here
  let alphabet = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    " ": " ",
    SOS: "...---...",
  };
  for (let i = 0; i < result.length; i++) {
    for (let key in alphabet) {
      if (result[i] === "") {
        spaceCount += 1;
      }
      if (result[i] === alphabet[key]) {
        lastResult += key;
      }
    }
    if (spaceCount % 2) {
      lastResult += " ";
    }
    // if (result[i] === "" && result[i++] === "") {
    //   lastResult += " ";
    // }
  }
  return lastResult;
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
