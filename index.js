document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
const form = document.getElementById("create-task-form");
const taskInput = document.getElementById("new-task-description");

const taskList = document.getElementById("tasks");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const taskText = taskInput.value;

  const li = document.createElement("li");
  li.textContent = taskText;

  taskList.appendChild(li);

  taskInput.value = "";
});

});
