//store todos in an array
var todos = ['item 1','item 2','item 3'];

//display todos using a function
function displayTodos(){
    console.log('My todos:',todos);
}

//add a todo using a function
function addTodo(todo){
    todos.push(todo);
    displayTodos();
}

//change the value of a todo using a function
function changeTodo(position, newValue){
    todos[position] = newValue;
    displayTodos();
}

//remove a todo using a function
function deleteTodo(position){
    todos.splice(position,1);
    displayTodos();
}
