import './styles.css';
import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/componentes';


 export const todoList = new TodoList();


todoList.todos.forEach(todo => crearTodoHtml (todo) );

//También se podria escribir así : todoList.todos.forEach(crearTodoHtml );
//porque el argumento es sólo uno y es el mismo a enviar. Sólo aplica en este escenario
//si son más se uno y no el mismo, se escribe con la flecha.

console.log('todos', todoList.todos);

