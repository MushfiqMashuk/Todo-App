/*
* Title: To-Do Application
* Description: Todo app using vanilla Javascript
* Author: Mushfiq Mashuk
* Date: 17-08-2021
* 
*/

const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const addedTaskList = document.querySelector('#added-task-list');
const completedTaskList = document.querySelector('#completed-task-list');

const addTask = function(event) {
    event.preventDefault();

    if(input.value && input.value !== ""){
        
        createTask(input.value);

    } else {
        alert("Please something to your To-Do");
    }

}

const createTask = function (task) {
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const label = document.createElement('label');

    checkBox.type = 'checkbox';
    label.innerText = task;

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    addedTaskList.appendChild(listItem);
    input.value = "";

    checkBox.onchange = completeTask;
};

const completeTask = function (event) {
    const checkBox = event.target;
    const listItem = checkBox.parentNode;
    const button = document.createElement('button');

    button.innerText = 'Delete';
    button.className = 'delete';

    listItem.appendChild(button);
    checkBox.remove();

    button.onclick = deleteTask;

    completedTaskList.appendChild(listItem);

}

const deleteTask = function (event) {
    const listItem = event.target.parentNode;

    completedTaskList.removeChild(listItem);
};


form.addEventListener('submit', addTask);