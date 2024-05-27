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
    const words = text
      .trim()
      .split(/\s+/)
      .filter(function (word) {
        return word.length > 0;
      });

    const removeLastDot = (number) => {
      return number.replace(/\.$/, "");
    };

    let count = 0;
    for (let i = 0; i < words.length; i++) {
      const number = Number(removeLastDot(words[i]));
      if (number && words[i] !== " ") {
        count++;
      }
    }
    return count;
  },

  // 5. getNumberSum

  getNumberSum: (text) => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter(function (word) {
        return word.length > 0;
      });

    const removeLastDot = (number) => {
      return number.replace(/\.$/, "");
    };

    let suma = 0;
    for (let i = 0; i < words.length; i++) {
      const number = Number(removeLastDot(words[i]));
      if (number && words[i] !== " ") {
        suma = suma + number;
      }
    }
    return suma;
  },

  // 5. getAverageWordLength
  getAverageWordLength: (text) => {
    // filtrar las palabras
    const words = text
      .trim()
      .split(/\s+/)
      .filter(function (word) {
        return word.length > 0;
      });

    // calcular la longitud total de cada palabra
    let totalLength = 0;
    for (let i = 0; i < words.length; i++) {
      totalLength = totalLength + words[i].length;
    }

    // calcular el promedio de la longitud de las palabras
    let averageLength = 0;
    if (words.length > 0) {
      averageLength = totalLength / words.length;
    }

    return Number(averageLength.toFixed(2));
  },
};

export default analyzer;
