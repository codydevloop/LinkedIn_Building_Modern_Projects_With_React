import React from 'react';
import {connect} from 'react-redux';
import {removeTodo, markTodoAsCompleted} from './actions';
import TodoListitem from './TodoListitem';
import  './TodoList.css';
import NewTodoForm from './NewTodoForm';
import {displayAlert} from './thunks';



const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, onDisplayAlertClicked }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListitem 
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onDisplayAlertClicked}/>)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch =>({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
    onDisplayAlertClicked: () => dispatch(displayAlert()),
})


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);