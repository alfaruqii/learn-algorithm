const log = console.log;
function anagrams(word, words) {
  let result = [];
  // log("this was word", word);
  if (typeof word === "string" && word.length !== 0) {
    words.map((items) => {
      // log("this was words", items);
      let alphabet = word.match(/.{1}/g);
      // log("this was alphabet", alphabet);
      let itemsLength = items.length;
      let alphabetLength = alphabet.length;
      if (itemsLength !== alphabetLength) {
        return;
      }
      for (let i = 0; i < items.length; i++) {
        log(itemsLength, alphabetLength);
        if (itemsLength === 0 && alphabetLength === 0) {
          result.push(items);
        }
        for (let j = 0; j < items.length; j++) {
          // log(itemsLength);
          // log(alphabetLength);
          // log(alphabet[i], "=", items[j]);
          if (alphabet[i] === items[j] && items.includes(word[j])) {
            // log(items[i]);
            itemsLength--;
            alphabetLength--;
            // } else if (alphabet[i] !== items[j] && alphabet[i] !== items[j++]) {
            //   log(alphabet[i])
            //   continue;
            // } else if (alphabet[i] !== items[j]) {
            //   break;
          }
        }
      }
    });
    return result;
  }
  return;
}

let tester = anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);
log(tester);
