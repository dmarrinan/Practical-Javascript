//create a todoList object with data and methods
var todoList = {
    //store todos in an array
    todos : ['item 1','item 2','item 3'],

    //display todos using a method
    displayTodos: function(){
        console.log('My todos:',this.todos);
    },
    
    //add a todo using a method
    addTodo: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    },
    
    //change the value of a todo using a method
    changeTodo: function(position, newValue){
        this.todos[position] = newValue;
        this.displayTodos();
    },
    
    //remove a todo using a method
    deleteTodo: function(position){
        this.todos.splice(position,1);
        this.displayTodos();
    }
}; 
