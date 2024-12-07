// script.js
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
  
    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") addTask();
    });
  
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }
  
      const taskItem = document.createElement("li");
      taskItem.classList.add("task-item");
  
      const taskContent = document.createElement("span");
      taskContent.textContent = taskText;
      taskContent.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
      });
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });
  
      taskItem.appendChild(taskContent);
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
  
      taskInput.value = "";
    }
  });
  