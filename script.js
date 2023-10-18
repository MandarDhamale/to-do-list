function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button onclick="removeTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function removeTask(button) {
  const taskList = document.getElementById("taskList");
  const li = button.parentElement;
  taskList.removeChild(li);
}
