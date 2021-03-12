window.addEventListener("load", start);

var globalIsEditing = false;
var globalCurrentItem = null;
var globalNames = [];

function start() {
  preventFormSubmit();
  activateInput();
  renderNames();
}

function preventFormSubmit() {
  function handlFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector("form");
  form.addEventListener("submit", handlFormSubmit);
}

function activateInput() {
  function handleKeyup(event) {
    if (event.key !== "Enter") {
      return;
    }
    var currentName = event.target.value.trim();
    if (currentName === "") {
      clear();
      return;
    }
    if (globalIsEditing) {
      globalNames[globalCurrentItem] = currentName;
    } else {
      globalNames.push(currentName);
    }
    clear();
    renderNames();
  }
  var inputName = getInput();
  inputName.addEventListener("keyup", handleKeyup);
}

function getInput() {
  return document.querySelector(#inputName);
}

function clear() {
  var inputName = getInput();
  inputName.value = "";
  inputName.focus();
  globalIsEditing = false;
}
