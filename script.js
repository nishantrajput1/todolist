function addTask() {
    const taskInput = document.getElementById("todo-input");
    const taskText = taskInput.value;

    if (taskText === "") return; // Do nothing if input is empty

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";
    removeButton.onclick = function() {
        taskItem.remove();
    };

    taskItem.appendChild(removeButton);
    document.getElementById("todo-list").appendChild(taskItem);

    taskInput.value = ""; // Clear input after adding
}
