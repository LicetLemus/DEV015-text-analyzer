import analyzer from "./analyzer.js";

// addEventListener(tipo de evento a escuchar, listener)

document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.querySelector("textarea[name='user-input']");
  const wordCountShow = document.querySelector("li[data-testid='word-count']");
  const characterCountShow = document.querySelector("li[data-testid='character-count']");
  const characterWithoutSpaceShow = document.querySelector("li[data-testid='character-no-spaces-count']")
  const getNumberCountShow = document.querySelector("li[data-testid='number-count']")
  const getNumberSumShow = document.querySelector("li[data-testid='number-sum']")
  const getAverageWordLengthShow = document.querySelector("li[data-testid='word-length-average']")
  const clearButton = document.getElementById("reset-button")

  textarea.addEventListener("input", function () {
    const text = textarea.value;
    const wordCount = analyzer.getWordCount(text);
    const characterCount = analyzer.getCharacterCount(text);
    const characterWithoutSpace = analyzer.getCharacterCountExcludingSpaces(text);
    const numberCount = analyzer.getNumberCount(text)
    const numberSum = analyzer.getNumberSum(text)
    const averageLength = analyzer.getAverageWordLength(text)

    // actualiza el contenido del elemento con la clase .word-count almacenado en wordCountShow en la página web
    wordCountShow.textContent = `Palabras: ${wordCount}`;
    characterCountShow.textContent = `Caracter: ${characterCount}`;
    characterWithoutSpaceShow.textContent = `Caracteres sin espacio: ${characterWithoutSpace}`
    getNumberCountShow.textContent = `Números: ${numberCount}`
    getNumberSumShow.textContent = `Suma de números: ${numberSum}`
    getAverageWordLengthShow.textContent = `Promedio longitud: ${averageLength}`
  });

  clearButton.addEventListener("click", function () {
    textarea.value = "";
    wordCountShow.textContent = "Palabras: 0";
    characterCountShow.textContent = "Caracter: 0";
    characterWithoutSpaceShow.textContent = "Caracteres sin espacio: 0";
    getNumberCountShow.textContent = "Números: 0";
    getNumberSumShow.textContent = "Suma de números: 0";
    getAverageWordLengthShow.textContent = "Promedio longitud: 0";
  });




});

