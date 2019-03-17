ECOSIA = document.getElementById("ecosia-search");
ECOSIABTN = document.getElementById("ecosia-btn");

TODO = document.getElementById("to-do");
TODOBTN = document.getElementById("todo-btn");
TODOLIST = document.getElementById("todo");

ECOSIABTN.addEventListener("click", search);
TODOBTN.addEventListener("click", add);

function search(e) {
  e.preventDefault();
  let search = "https://www.ecosia.org/search?q=" + ECOSIA.value;
  window.open(search, "_blank");
}

function add(e) {
  e.preventDefault();

  let newNode = document.createElement("li");
  let newSpan = document.createElement("span");
  let newInput = document.createElement("input");

  let newToDo = document.createTextNode(TODO.value);
  newInput.value = newToDo;
  newSpan.appendChild(newToDo);
  newNode.appendChild(newSpan);

  TODOLIST.insertBefore(newNode, document.getElementById("new"));
  //TODOLIST.appendChild(newNode);
  TODO.value = "";
}
