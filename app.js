// script.js
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item with the entered task
    var li = document.createElement("li");
    var taskText = document.createTextNode(taskInput.value);
    li.appendChild(taskText);

    // Add buttons for completing and deleting the task
    var completeBtn = document.createElement("button");
    completeBtn.innerHTML = "Complete";
    completeBtn.onclick = function() {
        li.style.textDecoration = "line-through";
        completeBtn.style.display = "none";
        deleteBtn.style.display = "none";
    };
    li.appendChild(completeBtn);

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };
    li.appendChild(deleteBtn);

    // Append the new list item to the task list
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
}
