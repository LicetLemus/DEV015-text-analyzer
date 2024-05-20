const analyzer = {

  getWordCount: function (text) {
    // Verifica si el parámetro text no es una cadena
    if (typeof text !== 'string') {
      return 0; // Si no es una cadena, retorna 0
    }
    // Divide el texto por espacios y filtra los elementos vacíos
    // .split(/\s+/) divide la cadena donde hay uno o más espacios en blanco.
    const words = text.trim().split(/\s+/).filter(function(word) {
      return word.length > 0;
    });

    // Retorna la cantidad de palabras
    return words.length;
  }
  /* Prueba consola:
const text = "Contabiliza la cantidad de palabras, por favor";
const wordCount = analyzer.getWordCount(text);
console.log(`Palabras: ${wordCount}`);
*/

/*
getCharacterCount: (text) => {
  //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
},
getCharacterCountExcludingSpaces: (text) => {
  //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
},
getAverageWordLength: (text) => {    
  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
},
getNumberCount: (text) => {
  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
},
getNumberSum: (text) => {
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
},
*/ 
};






export default analyzer;
