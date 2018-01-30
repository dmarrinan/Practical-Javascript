//create a todoList object with data and methods
var todoList = {
    //store todos in an array of objects
    todos : [],

    //display todos
    displayTodos: function(){
        console.log('My todos:',this.todos);
    },
    
    //add a todo with specified todoText
    //initialize completed boolean to false
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    
    //change the value of todoText at a given position
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    
    //remove a todo at a given posiition
    deleteTodo: function(position){
        this.todos.splice(position,1);
        this.displayTodos();
    },

    //change completed boolean at a given position
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
}; 
