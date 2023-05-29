let todoArr=[];
let id = 0;
document.getElementById('add-btn').addEventListener('click',addToDo);

function addToDo(){
    let todo = document.getElementById('todo').value;
    let priority = document.getElementById('priority').value;
    if(inputCheck(todo,priority)){
        todoArr[id]=[id,todo,priority];
        // console.log(todoArr[id]);
        console.log(todoArr)
        addToTable(todoArr[id][1],todoArr[id][2],id);
        id++;
    }
}

function inputCheck(todo,priority){
    if (todo == null || todo == undefined || todo == ''){
        alert('Please enter to do!');
        return false;
    }
    if (priority == null || priority == undefined || priority == ''){
        alert('Please enter the priority!');
        return false;
    }
    if (priority < 0 || priority > 3 || priority ==''){
        alert('Please enter the priority within range 1-3!');
        return false;
    }
    return true;
}

function addToTable(todoArr1,todoArr2,id){
    const TBODY = document.getElementById('tbody');
    TBODY.insertAdjacentHTML("afterbegin",
    `<tr id=${id}><td>${todoArr1}</td> <td>${todoArr2}</td> <td><button id='remove-btn-${id}'>remove</button></td></tr>`);
    document.getElementById(`remove-btn-${id}`).addEventListener('click',removeToDo)
}

function removeToDo(){
    let id = this.parentElement.parentElement.getAttribute('id');
    todoArr[id]='';
    this.parentElement.parentElement.remove();
    console.log('removed');
    console.log(todoArr);
    
}




