'use strict'
class TODO{
    _id;
    _todo;
    _priority;
    _done;
    constructor(todo,priority,done){
        this._todo=todo;
        this._priority=priority;
        this._done=done;
    }
    //getters
    get id() { return this._id;}
    get todo() { return this._todo;}
    get priority() { return this._priority;}
    get done() { return this._done;}
    //setters
    set id(value) {this._id = value;}
    set todo(value) {this._todo = value;}
    set priority(value) {this._priority = value;}
    set done(value) {this._done = value;}
}
const TBODY = document.getElementById("tbody");
const todosArray = [];
const mostImportantTodos = [];
const sortedTodosByPriority = [];
document.getElementById("add-btn").addEventListener("click", addToDo);
document.getElementById("show-important-btn").addEventListener("click", findMostImportantTodos);
document.getElementById("sort-important-btn").addEventListener("click", sortTodosByPriority);
document.getElementById("show-all-btn").addEventListener("click", showAll);

function addToDo() {
    let todo = document.getElementById("todo").value;
    let priority = document.getElementById("priority").value;
    // debugger;
    let id = todosArray.length;
    if (inputCheck(todo, priority)) {
        // if (todosArray.length==0){
            //     todoObj.id=0;
            // }
            // todosArray.push({ id: id, todo: todo, priority: priority });
        let todoObj = new TODO(todo,priority,false);
        todosArray.push(todoObj);
        setIdsForTodos(todosArray);
        console.log("todo added");
        console.log(todosArray[id]);
        console.log("todos array");
        renderTable(todosArray);
    }
}

function setIdsForTodos(array){
    debugger;
    if (array != null && array != undefined){
        let id =0;
        for (let todoObj of array) {
            todoObj.id = id;
            id++;
        }
        // for (let i=0; i<(array.length); i++) {
        //     array[i].id=i;
        // }
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
            `<tr id=${id}>`+
                `<td>${todo}</td> `+
                `<td>${priority}</td> `+
                `<td><button id='edit-btn-${id}'>edit</button> <button id='remove-btn-${id}'>remove</button> `+
                    `<button id='done-btn-${id}'>done?</button> </td> `+
            `</tr>`
        );
        document.getElementById(`remove-btn-${id}`).addEventListener("click", removeToDo);
        document.getElementById(`edit-btn-${id}`).addEventListener("click", editToDo);
        document.getElementById(`done-btn-${id}`).addEventListener("click", markDone);
    }
}

function removeToDo() {
    let id = this.parentElement.parentElement.getAttribute("id");
    this.parentElement.parentElement.remove();
    todosArray.splice(id, 1);
    setIdsForTodos();
    console.log("array after removal");
    console.log(todosArray)    
}

function editToDo(){
    let id = String(this.parentElement.parentElement.getAttribute("id"));
    let tr = this.parentElement.parentElement;

    tr.firstChild.innerHTML=
    `<input id='edit-${id}' type='text' placeholder='Type your edit'></input>` 
    +`<br><button id='save-btn-${id}' >save</button>`
    +`<button id='cancel-btn-${id}' >cancel</button>`;

    document.getElementById(`save-btn-${id}`).addEventListener("click", save);
    document.getElementById(`cancel-btn-${id}`).addEventListener("click", cancel);
}

function markDone(){
    // debugger;
    let id = String(this.parentElement.parentElement.getAttribute("id"));
    let tr = this.parentElement.parentElement;
    if ( todosArray[id].done == false){
        tr.style="text-decoration: line-through;"
        this.style="background-color: green;";
        todosArray[id].done = true;
    }
    else if (todosArray[id].done == true){
        tr.style="text-decoration: none;"
        this.style=`
            background-color: transparent;
            color: var(--main-font-color);`;
        todosArray[id].done = false;
    }


}
function findMostImportantTodos() {
    sortBy(todosArray,"priority");
    //making mostImportantTodos array emty
    mostImportantTodos.splice(0,(+mostImportantTodos.length+1));
    for (const todo of todosArray) {
        if (todo.priority == 1) {
            mostImportantTodos.push(todo);
        }
    }
    console.log("most important todos");
    renderTable(mostImportantTodos);
    sortBy(todosArray,"id");
}

function sortTodosByPriority(){
    // debugger;
    // sortedTodosByPriority
    sortBy(todosArray,"priority");
    //making sortedTodosByPriority array empty
    sortedTodosByPriority.splice(0,(+sortedTodosByPriority.length+1));
    for (const todo of todosArray) {
        sortedTodosByPriority.unshift(todo);
    }
    console.log("sorted important todos");
    console.log(sortedTodosByPriority);
    renderTable(sortedTodosByPriority);
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
    let edit = document.getElementById(`edit-${id}`).value;
    if (edit == null || edit == undefined || edit == "") {
        alert('Please enter a valid ToDo')
    }
    else{
        todosArray[id].todo = edit;
        let buttonClicked = document.getElementById(`save-btn-${id}`)
        renderRow(todosArray[id],buttonClicked);
    }
    
}

function cancel(){
    let id = this.parentElement.parentElement.getAttribute("id");
    let buttonClicked = document.getElementById(`cancel-btn-${id}`)
    renderRow(todosArray[id],buttonClicked);
}

function renderRow(task,buttonClicked){
    let id = String(task.id);
    let todo = String(task.todo);
    let priority = String(task.priority);
    let tr = buttonClicked.parentElement.parentElement;
    tr.innerHTML='';
    tr.insertAdjacentHTML(
        "afterbegin",
        `<tr id=${id}>`+
            `<td>${todo}</td> `+
            `<td>${priority}</td> `+
            `<td><button id='edit-btn-${id}'>edit</button> <button id='remove-btn-${id}'>remove</button></td> `+
        `</tr>`
    )
    document.getElementById(`remove-btn-${id}`).addEventListener("click", removeToDo);
    document.getElementById(`edit-btn-${id}`).addEventListener("click", editToDo);

}