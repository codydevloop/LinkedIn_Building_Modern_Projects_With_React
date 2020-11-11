import React from 'react';
import './App.css';
import {hot} from 'react-hot-loader';
import TodoList from  './todos/TodoList';

const App = () => (
    
  
    <div className='App'>
    
        {/* <h1>Test</h1> */}
        <TodoList/>
    </div>
    
);

export default hot(module)(App);
// export default App;
