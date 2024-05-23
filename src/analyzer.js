const analyzer = {
  // 1. getWordCount
  getWordCount: function (text) {
    if (typeof text !== "string") {
      return 0;
    }

    const words = text
      .trim()
      .split(/\s+/)
      .filter(function (word) {
        return word.length > 0;
      });

    return words.length;
  },

  // 2. getCharacterCount
  getCharacterCount: (text) => {
    return text.length;
  },

  // 3. getCharacterCountExcludingSpaces

  getCharacterCountExcludingSpaces: (text) => {
    // sin g de global, only replace the first coincidence
    // replace(patron, replace)
    const characterWithoutSpace = text.replace(
      /[\s.,/#!$%^&*;:{}=\-_~()]/g,
      ""
    );
    return characterWithoutSpace.length;
  },

  // 4. getNumberCount
  getNumberCount: (text) => {
    const words = text.trim().split(/\s+/).filter(function (word) {
      return word.length > 0;
    });

    const removeLastDot = (number) => {
      return number.replace(/\.$/, "")
    } 

    let count = 0;
    for (let i = 0; i < words.length; i++) {
      const number = Number(removeLastDot(words[i]))
      if (number && words[i] !== " ") {
        count++;
      }
    }
    return count
  },

  /*
getAverageWordLength: (text) => {    

},

getNumberCount: (text) => {
  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
},
getNumberSum: (text) => {
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
},
*/
};

/* Prueba consola:
const text = "Contabiliza la cantidad de palabras, por favor";
const wordCount = analyzer.getWordCount(text);
console.log(`Palabras: ${wordCount}`);

const prueba = "cantidad de caracteres";
const characterCount = analyzer.getCharacterCount(prueba);
console.log(`El recuento de caracteres es: ${characterCount}`);

*/

export default analyzer;
