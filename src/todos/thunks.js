//thunk is a function that contains another function that contains the logic to execute when triggered

export const displayAlert = () => () => {
    alert('Hello');
};