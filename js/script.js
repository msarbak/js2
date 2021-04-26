import { addListToDo, addAllToDo } from './add.js'
import { deleteToDo, doneToDo } from './end.js'

const task = document.querySelector('#task');
const addButton = document.querySelector('.add-button');
const toDoList = document.querySelector('#list');
const toast = document.querySelector('.toast');

let toDoArray = [];

addButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", endToDo);

start();

function start() {
    let getData = localStorage.getItem(("yourList"));
    if (getData != null) {
        toDoArray = JSON.parse(getData);
        toDoArray.forEach(element => {
            addAllToDo(element, toDoList);
        });
    }
}


function addToDo() {
    if (task.value.trim() !== "") {
        addListToDo(task, toDoList, toDoArray);
        task.value = "";
    } else {
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 1500)
    }
}

function endToDo(event) {
    if (event.target.className === "close") {
        deleteToDo(event, toDoArray);
    } else {
        doneToDo(event);
    }
}