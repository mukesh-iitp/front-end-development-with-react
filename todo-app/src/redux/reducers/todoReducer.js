import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initialState={
    todos: [
        {"text": "meeting at 9", completed: true},
        {"text": "Lunch at 2", completed: false}
    ]
}

export function todoReducer(state=initialState, action){
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todos: [
                    ...state.todo,
                    {
                        text: action.text,
                        completed: false 
                    }
                ]
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todos: state.todo.map((todo,i) => {
                    if(i === action.index){
                        todo.completed = !todo.completed
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}