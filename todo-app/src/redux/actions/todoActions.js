
//action constraints
export const Add_TODO="ADD Todo";
export const TOGGLE_TODO="Toggle Todo"

//action creators
export const addTodo = (text) => ({text, type: Add_TODO});
export const toggleTodo = (index) => ({index, type:TOGGLE_TODO});