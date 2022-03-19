import TodoList from "./TodoList.js";
import exam from "./exam.js"

$('#wd-todo').append(`
    <div class="container">
        <h1>Todo example</h1>
        ${TodoList()}
        ${exam()}
        
    </div>
`);
