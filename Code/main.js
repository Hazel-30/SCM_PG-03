function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var task = taskInput.value.trim();
    if (task !== "") {
        var li = document.createElement("li");
        li.className = "todo-item";
        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-button" onclick="removeTask(this)">Delete</button>
        `;

        taskList.appendChild(li);

        taskInput.value = "";
    }
}

function removeTask(button) {
    var listItem = button.parentElement;
    listItem.remove();
}
