let taskList = [];

document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    let newTask = document.getElementById('new-task').value;
    if (newTask!== '') {
        taskList.push(newTask);
        document.getElementById('new-task').value = '';
        displayTasks();
    }
}

function displayTasks() {
    let taskListHTML = '';
    taskList.forEach((task, index) => {
        taskListHTML += `<li>${task} <button onclick="deleteTask(${index})">X</button></li>`;
    });
    document.getElementById('task-list').innerHTML = taskListHTML;
}

function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}

displayTasks();