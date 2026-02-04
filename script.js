// Titel (h1)
const title = document.createElement("h1");
title.textContent = "Min Todo-list";
document.body.appendChild(title);

// Textfält och knapp
const todoInput = document.createElement("input");
todoInput.type = "text";
todoInput.placeholder = "Vad ska du göra?";
document.body.appendChild(todoInput);

const addButton = document.createElement("button");
addButton.classList.add("btn", "btn-add");
addButton.textContent = "Lägg till";
document.body.appendChild(addButton);

// Lista (ul)
const todoList = document.createElement("ul");
document.body.appendChild(todoList);

  // Alla mina todo's sparas här
const toDos = [];

// Lägg till li från inputfältet och uppdatera todoList.
function addTodoItem() {
  const todoText = todoInput.value.trim();
  if (todoText === "") return;

  const todo = { text: todoText, done: false };
  toDos.push(todo);

  const listItem = document.createElement("li");
  listItem.textContent = todo.text;

// Ta bort-knapp
 const removeButton = document.createElement("button");
removeButton.classList.add("btn", "btn-remove");
removeButton.textContent = "Ta bort";

// Klar-knapp
const readyButton = document.createElement("button");
readyButton.classList.add("btn", "btn-ready");
readyButton.textContent = "Klar";

// Knapparnas funktioner
removeButton.addEventListener("click", function () {
  todoList.removeChild(listItem);
  console.log(toDos);
});

  readyButton.addEventListener("click", function () {
    todo.done = !todo.done;
    listItem.classList.toggle("done");
    console.log(toDos);
  });

  // Lägg till allt i HTML och uppdatera listan

  listItem.appendChild(removeButton);
  listItem.appendChild(readyButton);
  todoList.appendChild(listItem);
  console.log(toDos);
}

// Ropa på lägg till-knappen
addButton.addEventListener("click", addTodoItem);

// Rensa lista knapp
const clearButton = document.createElement("button");
clearButton.textContent = "Rensa lista";
clearButton.classList.add("btn", "btn-clear");
document.body.appendChild(clearButton);

// Ropa på rensa-knappen
clearButton.addEventListener("click", clearTodoList);

// Rensa-knappens funktion
function clearTodoList() {
  toDos.length = 0;
  todoList.innerHTML = "";
  console.log(toDos);
}




