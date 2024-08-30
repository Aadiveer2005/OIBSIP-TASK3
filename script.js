const pendingTasks = document.getElementById('pending-tasks');
const completedTasks = document.getElementById('completed-tasks');

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = createTaskElement(taskText);
        pendingTasks.appendChild(listItem);
        taskInput.value = '';
    }
}

function createTaskElement(taskText) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = () => markTaskComplete(listItem);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(listItem);

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

function markTaskComplete(taskItem) {
    taskItem.classList.add('completed');
    completedTasks.appendChild(taskItem);
    taskItem.querySelector('button').remove(); // Remove the 'Complete' button
}

function deleteTask(taskItem) {
    taskItem.remove();
}
