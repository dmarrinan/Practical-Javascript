//store todos in an array
var todos = ['item 1','item 2','item 3'];

//display todos
console.log('My todos:',todos);

//add a todo
todos.push('new todo');

//change the value of a todo
todos[0] = 'Changed!';

//remove a todo
todos.splice(0,1);