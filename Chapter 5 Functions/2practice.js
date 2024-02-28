/*
function countVowels(str) {
  let count = 0;
  for (let char of str) {
    console.log(char);
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "O" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log("Numer of Vowels is",count);
}

countVowels("Ganesha");
*/

let arrow = (str) =>{
    let count = 0;
    for (let char of str) {
      console.log(char);
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "O" ||
        char === "u"
      ) {
        count++;
      }
    }
    console.log("Numer of Vowels is",count);
}

arrow("Ganesha")