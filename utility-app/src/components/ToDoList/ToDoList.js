import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { actions, setInitialStateAsync } from "../../redux/reducers/todoReducer";
import { todoSelector } from "../../redux/reducers/todoReducer";

import "./ToDoList.css";
import { useEffect } from "react";
// import axios from 'axios';


function ToDoList() {

  // const todos=useSelector((state)=> state.todoReducer.todos);
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  // const todos= store.getState().todos;

  useEffect(()=>{
    dispatch(setInitialStateAsync());
    // fetch("http://localhost:4100/api/todos")
    //   .then(res => res.json())
    //     .then(parsedJson => {
    //       console.log(parsedJson);
    //     })
    // axios.get("http://localhost:4100/api/todos")
    //   .then(res=>{
    //       console.log(res.data);
    //       dispatch(actions.setInitialState(res.data));
    //     })
  },[]);


  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          // onClick={()=>{disptach(toggleTodo(index))}}
          onClick={()=>{
            // console.log("[Log]: Todo- Toggle Action dispatched")
            dispatch(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;