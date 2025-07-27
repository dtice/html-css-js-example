/*
This is an example of a simple JavaScript function that changes the text of an HTML element.
*/
function changeText() {
  let textElement = document.getElementById("js-example-text");

  if (textElement) {
    textElement.textContent = "Text changed successfully!";
  }
}
