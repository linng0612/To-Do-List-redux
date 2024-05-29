import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'; 

const App = () => {
    return (
        <div className="container">
            <h1>Starting your day with To-Do-List</h1>
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default App;
