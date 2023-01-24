// Selectors
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
let filterOption = document.querySelector(".filter-todo");

// Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions

function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();
  // todo Div
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create li
  let newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // heck button
  let completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // edit button
  let editButton = document.createElement("button");
  editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  editButton.classList.add("edit-btn");
  todoDiv.appendChild(editButton);

  // trash  button
  let trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // append to list
  todoList.appendChild(todoDiv);
  // claer todo input
  todoInput.value = "";
}

function deleteCheck(e) {
  let item = e.target;
  // delete TODO
  if (item.classList[0] === "trash-btn") {
    let todo = item.parentElement;
    // animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // checkmark
  if (item.classList[0] === "complete-btn") {
    let todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  let todos = todoList.childNodes;
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
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

//Add an event listener to edit button
todoList.addEventListener("click", editTodo);


//Edit Todo function
function editTodo(e){
  //Check if the edit button is clicked
  if(e.target.classList.contains("edit-btn")){
    let todo = e.target.parentElement;
    let todoText = todo.querySelector(".todo-item").textContent;
    let input = document.createElement("input");
    input.value = todoText;
    todo.querySelector(".todo-item").textContent = "";
    todo.querySelector(".todo-item").appendChild(input);
  }
}

//Save Edit Todo function
function saveEdit(e){
  if(e.target.classList.contains("edit-btn")){
    let todo = e.target.parentElement;
    let newTodoText = todo.querySelector("input").value;
    todo.querySelector(".todo-item").textContent = newTodoText;
  }
}











// // Selectors
// let todoInput = document.querySelector(".todo-input");
// let todoButton = document.querySelector(".todo-button");
// let todoList = document.querySelector(".todo-list");
// let filterOption = document.querySelector(".filter-todo");

// // Event Listeners

// todoButton.addEventListener("click", addTodo);

// todoList.addEventListener("click", deleteCheck);

// filterOption.addEventListener("click", filterTodo);

// // Functions

// function addTodo(event) {
//   // prevent form from submitting
//   event.preventDefault();
//   // todo Div
//   let todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo");
//   // create li
//   let newTodo = document.createElement("li");
//   newTodo.innerText = todoInput.value;
//   newTodo.classList.add("todo-item");
//   todoDiv.appendChild(newTodo);
//   // heck button
//   let completedButton = document.createElement("button");
//   completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
//   completedButton.classList.add("complete-btn");
//   todoDiv.appendChild(completedButton);

//   // edit button
//   let editButton = document.createElement("button");
//   editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
//   editButton.classList.add("edit-btn");
//   todoDiv.appendChild(editButton);

//   // trash  button
//   let trashButton = document.createElement("button");
//   trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
//   trashButton.classList.add("trash-btn");
//   todoDiv.appendChild(trashButton);
//   // append to list
//   todoList.appendChild(todoDiv);
//   // claer todo input
//   todoInput.value = "";
// }

// function deleteCheck(e) {
//   let item = e.target;
//   // delete TODO
//   if (item.classList[0] === "trash-btn") {
//     let todo = item.parentElement;
//     // animation
//     todo.classList.add("fall");
//     todo.addEventListener("transitionend", function () {
//       todo.remove();
//     });
//   }
//   // checkmark
//   if (item.classList[0] === "complete-btn") {
//     let todo = item.parentElement;
//     todo.classList.toggle("completed");
//   }
// }

// function filterTodo(e) {
//   let todos = todoList.childNodes;
//   todos.forEach(function (todo) {
//     switch (e.target.value) {
//       case "all":
//         todo.style.display = "flex";
//         break;
//       case "completed":
//         if (todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//       case "uncompleted":
//         if (!todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//     }
//   });
// }



