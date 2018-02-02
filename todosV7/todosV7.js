//create a todoList object with data and methods
var todoList = {
    //store todos in an array of objects
    todos : [],

    //displays todos and indicates if they are completed or indicates that todo list is empty
    displayTodos: function(){
        if(this.todos.length === 0){
            console.log('Your todo list is empty!')
        }
        else{
            console.log('My Todos: ')
            for (var i=0; i<this.todos.length; i++){
                if(this.todos[i].completed === true){
                    console.log('(x)', this.todos[i].todoText);
                }
                else{
                    console.log('( )', this.todos[i].todoText);
                }
            }
        }
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
    },

    toggleAll: function(){
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // Get number of completed todos.
        for (var i=0; i <totalTodos; i++){
            if(this.todos[i].completed === true){
                completedTodos++;
            }
        }

        //case 1: If everything's true, make everything false
        if (completedTodos===totalTodos){
            for(var i=0; i<totalTodos; i++){
                for(var i=0; i<totalTodos; i++){
                    this.todos[i].completed = false;
                }
            }
        }
        //case 2: otherwise make everything true.
        else{
            for(var i=0; i<totalTodos; i++){
                for(var i=0; i<totalTodos; i++){
                    this.todos[i].completed = true;
                }
            }
        }
        this.displayTodos();
    }
};

var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click',function(){
    todoList.displayTodos();
}); 

toggleAllButton.addEventListener('click',function(){
    todoList.toggleAll();
});
