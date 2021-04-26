function addAllToDo(element,toDoList){
    addToDo(element,toDoList);
}

function addListToDo(task,toDoList,toDoArray){
    addToDo(task.value,toDoList);
    toDoArray.push(task.value);
    addListToDoFromStorage(toDoArray);
}

function addListToDoFromStorage(toDoArray){
    localStorage.setItem("yourList", JSON.stringify(toDoArray));
}

function addToDo(data,toDoList){
    var listItem = document.createElement("li");
    listItem.innerHTML = `<span class = "task">${data}</span><span class="close">x<span>`;
    toDoList.appendChild(listItem);
}


export {addListToDo,addAllToDo};
