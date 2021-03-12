window.addEventListener("load", start);

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
}
