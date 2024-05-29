import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector(state => state.todos);

    return (
        <div id="tasks">
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} />
            ))}
        </div>
    );
};

export default TodoList;
