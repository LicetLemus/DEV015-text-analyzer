import analyzer from "./analyzer.js";

// addEventListener(tipo de evento a escuchar, listener)
document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.querySelector("textarea[name='user-input']");
  const wordCountShow = document.querySelector(".word-count");

  textarea.addEventListener("input", function () {
    const text = textarea.value;
    const wordCount = analyzer.getWordCount(text);
    // actualiza el contenido del elemento con la clase .word-count almacenado en wordCountShow en la página web
    wordCountShow.textContent = `Palabras: ${wordCount}`;
  });
});
