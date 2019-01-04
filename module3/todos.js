var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("listTodos")) || [];

function renderTodos() {
  listElement.innerHTML = "";
  for (todo of todos) {
    var todoElement = document.createElement("li");
    var linkElement = document.createElement("a");
    var todoText = document.createTextNode(todo);
    var linkText = document.createTextNode("Delete");

    linkElement.setAttribute("href", "#");
    var pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

function deleteTodo(position) {
  todos.splice(position, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("listTodos", JSON.stringify(todos));
}

buttonElement.onclick = function() {
  todos.push(inputElement.value);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
};

renderTodos();
