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

const addTask = function(event) {
    event.preventDefault();

    if(input.value && input.value !== ""){
        const listItem = document.createElement('li');
        const checkBox = document.createElement('input');
        const label = document.createElement('label');

        checkBox.type = 'checkbox';
        label.innerText = input.value;

        listItem.appendChild(checkBox);
        listItem.appendChild(label);

        addedTaskList.appendChild(listItem);
        input.value = "";

        bindIncompleteTask(checkBox);

    } else {
        alert("Please something to your To-Do");
    }

}

const bindIncompleteTask = function(checkBox) {
    checkBox.addEventListener('change', )
}


form.addEventListener('submit', addTask);