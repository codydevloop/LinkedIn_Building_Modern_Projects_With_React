import {CREATE_TODO, REMOVE_TODO} from './actions';


// reducers take current state and action (that was triggerd) and decide what changes should occur should occur, and return the updated state

export const todos = (state = [], action) => {
    const {type, payload} = action;

    switch (type){
        case CREATE_TODO: {
            const {text} = payload;
            const newTodo = {
                text,
                isCompleted: false,
            };
            return state.concat(newTodo);  //concat does not mutate array
        }

        case REMOVE_TODO: {
            const {text} = payload;
            return state.filter(todo => todo.text !== text);
        }

        default:
            return state;

    }
}