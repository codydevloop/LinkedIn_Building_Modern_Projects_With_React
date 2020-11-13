import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {removeTodo, markTodoAsCompleted} from './actions';
import TodoListitem from './TodoListitem';
import  './TodoList.css';
import NewTodoForm from './NewTodoForm';
import {displayAlert, loadTodos} from './thunks';



const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>;
    const content = (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListitem 
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}/>)}
    </div>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading : state.isLoading,
    todos: state.todos,
})

const mapDispatchToProps = dispatch =>({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
    
})


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);