var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var del = document.createElement("button");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.appendChild(del);
  del.innerHTML = "delete";
  del.classList.add("delete");
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeyPress() {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleDone(task) {
  if (task.target.tagName === "LI") {
    task.target.classList.toggle("done");
  }
}

function deleteButton(element) {
  if (element.target.classList == "delete") {
    element.target.parentElement.remove();
    console.log("working");
  }
}

function clickFunctions(element) {
  toggleDone(element);
  deleteButton(element);
}

ul.addEventListener("click", clickFunctions);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
