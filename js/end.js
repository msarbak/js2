function deleteToDo(event,toDoArray){
    let deleteBtn = event.target;
    let deleteText = deleteBtn.parentElement.firstChild.innerHTML;
    var index = toDoArray.indexOf(deleteText);

    toDoArray.splice(index,1);
    deleteToDoFromStorage(toDoArray);
    deleteBtn.parentElement.remove();
}

function deleteToDoFromStorage(toDoArray){
    localStorage.setItem("yourList",JSON.stringify(toDoArray));
}

function doneToDo(event){
    if(event.target.className === "checked"){
        event.target.classList.remove("checked");
    }else{
        event.target.classList.add("checked");
    }
}

export {deleteToDo,doneToDo};