export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text,
});

export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    payload: index,
});

export const deleteTodo = (index) => ({
    type: DELETE_TODO,
    payload: index,
});
