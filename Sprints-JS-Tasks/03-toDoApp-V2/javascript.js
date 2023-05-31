'use strict'
const TBODY = document.getElementById("tbody");
const todosArray = [];
const mostImportantTodos = [];
document.getElementById("add-btn").addEventListener("click", addToDo);
document.getElementById("show-important-btn").addEventListener("click", findMostImportantTodos);
document.getElementById("show-all-btn").addEventListener("click", showAll);

function addToDo() {
    let todo = document.getElementById("todo").value;
    let priority = document.getElementById("priority").value;
    setIdsForTodos();
    let id = todosArray.length;
    if (inputCheck(todo, priority)) {
        todosArray.push({ id: id, todo: todo, priority: priority });
        console.log("todo added");
        console.log(todosArray[id]);
        console.log("todos array");
        renderTable(todosArray);
    }
}

function setIdsForTodos(){
    if (todosArray != null && todosArray != undefined){
        for (let i=0; i<todosArray.length; i++) {
            todosArray[i].id=i;
        }
    }
}

function inputCheck(todo, priority) {
    if (todo == null || todo == undefined || todo == "") {
        alert("Please enter to do!");
        return false;
    }
    if (priority == null || priority == undefined || priority == "") {
        alert("Please enter the priority!");
        return false;
    }
    if (priority < 1 || priority > 3) {
        alert("Please enter the priority within range 1-3!");
        return false;
    }
    return true;
}

function renderTable(array){
    console.log(array);
    TBODY.innerHTML='';
    
    for(const task of array){
        let id = String(task.id);
        let todo = String(task.todo);
        let priority = String(task.priority);
        TBODY.insertAdjacentHTML(
            "afterbegin",
            `<tr id=${id}><td>${todo}</td> <td>${priority}</td> <td>  <button id='edit-btn-${id}'>edit</button> <button id='remove-btn-${id}'>remove</button></td> </tr>`
        );
        document.getElementById(`remove-btn-${id}`).addEventListener("click", removeToDo);
        document.getElementById(`edit-btn-${id}`).addEventListener("click", editToDo);
    }
}

function removeToDo() {
    let id = this.parentElement.parentElement.getAttribute("id");
    this.parentElement.parentElement.remove();
    todosArray.splice(id, 1);
    setIdsForTodos();
    console.log("array after removal");
    renderTable(todosArray);
    
}

function editToDo(){
    let id = this.parentElement.parentElement.getAttribute("id");
    
    let tr = this.parentElement.parentElement;
    tr.firstChild.innerHTML=`
    <input id='edit-${id}' type='text' placeholder='Type your edit'></input>` 
    +`<br><button id="save-btn">save</button> <button id="cancel-btn">cancel</button>`;

    document.getElementById(`save-btn`).addEventListener("click", save);
    document.getElementById(`cancel-btn`).addEventListener("click", showAll);
}

function findMostImportantTodos() {
    sortBy(todosArray,"priority");
    //making mostImportantTodos array emty
    mostImportantTodos.splice(0,(+mostImportantTodos.length+1));
    //check for priority = 1
    for (const todo of todosArray) {
        if (todo.priority == 1) {
            mostImportantTodos.push(todo);
            console.log("most important todos[1]");
            renderTable(mostImportantTodos);
        }
    }
    //check for priority = 2 if there is no 1
    if (mostImportantTodos.length==0){
        for (const todo of todosArray) {
            if (todo.priority == 2) {
                mostImportantTodos.push(todo);
                console.log("most important todos[2]");
                renderTable(mostImportantTodos);
            }
        }
    }
    //check for priority = 3 if there is no 1 or 2   
    if (mostImportantTodos.length==0){
        for (const todo of todosArray) {
            if (todo.priority == 3) {
                mostImportantTodos.push(todo);
                console.log("most important todos[3]");
                renderTable(mostImportantTodos);
            }
        }
    }
    //if there are no todos
    if (mostImportantTodos.length==0){
        alert('please insert todos')
    }


    // console.log("most important todos");
    // renderTable(mostImportantTodos)
    sortBy(todosArray,"id")
}

function sortBy(array, key) {
    if (key == "id"){
        array.sort(function (a, b) {
            return Number(a.id) - Number(b.id);
        });
    }
    if (key == "priority"){
        array.sort(function (a, b) {
            return Number(a.priority) - Number(b.priority);
        });
    }
}

function showAll(){
    renderTable(todosArray)
}

function save(){
    let id = this.parentElement.parentElement.getAttribute("id");
    // console.log(id);
    let edit = document.getElementById(`edit-${id}`).value;
    // console.log(edit);
    if (edit == null || edit == undefined || edit == "") {
        alert('Please enter a valid ToDo')
        renderTable(todosArray);
    }
    else{
        todosArray[id].todo = edit;
        renderTable(todosArray);
    }
    
}