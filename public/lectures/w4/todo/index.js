import TodoList from "./TodoList.js";

const todolist = TodoList();

$("#todo-app")
.append(`<h1>Todo App</h1>
         <p>Some paragrpah some paragraph.</p>
${TodoList}`);

