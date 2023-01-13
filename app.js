//selectors
const todoList = document.querySelector(".Todo-list");
const todoButton = document.querySelector(".Todo-button");
const todoInput = document.querySelector(".Todo-input");
const filterOption = document.querySelector(".filter-todo");

//eventlistners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
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
  // creating complete button
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
function deleteCheck(e) {
  const item = e.target;
  console.log(e.target);
  //delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const todos = item.parentElement;
    todos.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;

      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
      case "uncompleted":
        if (!todo.classList.contains("complete")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
