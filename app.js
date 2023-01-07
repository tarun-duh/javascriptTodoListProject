//selectors
const todoList = document.querySelector(".Todo-list");
const todoButton = document.querySelector(".Todo-button");
const todoInput = document.querySelector(".Todo-input");
//eventlistners
todoButton.addEventListener("click", addTodo);

//functions
function addTodo(event) {
  event.preventDefault();
  //   create a todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //   creating an li
  const newTodo = document.createElement("li");
  newTodo.classList.add("newTodo");
  newTodo.innerHTML = todoInput.value;
  todoDiv.append(newTodo);
  // creting complete button
  const completedButton = document.createElement("button");
  completedButton.classList.add("complete-btn");
  completedButton.innerHTML = '<i class ="fas fa-check"><i>';
  todoDiv.appendChild(completedButton);
  //creating delete button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = '<i class ="fas fa-trash"><i>';
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  //clear to do input
  todoInput.value = "";
}
