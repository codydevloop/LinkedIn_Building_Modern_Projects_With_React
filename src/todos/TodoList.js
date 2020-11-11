import React from 'react';
import TodoListitem from './TodoListitem';
import  './TodoList.css';
import NewTodoForm from './NewTodoForm';


const TodoList = ({ todos = [{text: "hello"}] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListitem todo={todo} />)}
    </div>
);

export default TodoList;