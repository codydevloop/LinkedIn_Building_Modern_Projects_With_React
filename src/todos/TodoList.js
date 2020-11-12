import React from 'react';
import {connect} from 'react-redux';
import {removeTodo} from './actions';
import TodoListitem from './TodoListitem';
import  './TodoList.css';
import NewTodoForm from './NewTodoForm';


const TodoList = ({ todos = [], onRemovePressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListitem todo={todo} onRemovePressed={onRemovePressed}/>)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch =>({
    onRemovePressed: text => dispatch(removeTodo(text)),
})


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);