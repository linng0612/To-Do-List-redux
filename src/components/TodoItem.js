import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';

const TodoItem = ({ todo, index }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(index));
    };

    const handleDelete = (e) => {
        e.stopPropagation(); 
        dispatch(deleteTodo(index));
    };

    return (
        <div className={`task ${todo.completed ? 'completed' : ''}`} onClick={handleToggle}>
            <span id="taskname">{todo.text}</span>
            <button className="delete" onClick={handleDelete}>
                <i className="far fa-trash-alt"></i>
            </button>
        </div>
    );
};

export default TodoItem;
