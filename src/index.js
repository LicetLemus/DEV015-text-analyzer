import analyzer from "./analyzer.js";

// addEventListener(tipo de evento a escuchar, listener)

document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.querySelector("textarea[name='user-input']");
  const wordCountShow = document.querySelector(".word-count");
  const characterCountShow = document.querySelector(".count-character");
  const characterWithoutSpaceShow = document.querySelector(".character-without-space")

  textarea.addEventListener("input", function () {
    const text = textarea.value;
    const wordCount = analyzer.getWordCount(text);
    const characterCount = analyzer.getCharacterCount(text);
    const characterWithoutSpace = analyzer.getCharacterCountExcludingSpaces(text);

    // actualiza el contenido del elemento con la clase .word-count almacenado en wordCountShow en la página web
    wordCountShow.textContent = `Palabras: ${wordCount}`;
    characterCountShow.textContent = `Caracter: ${characterCount}`;
    characterWithoutSpaceShow.textContent = `Caracteres sin espacio: ${characterWithoutSpace} `
  });
});

