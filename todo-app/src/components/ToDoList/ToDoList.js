import { toggleTodo } from "../../redux/actions/todoActions";
import "./ToDoList.css";
import {useSelector, useDispatch} from 'react-redux';

// function ToDoList({todos, onToggle}) {
function ToDoList({onToggle}) {

  const todos = useSelector((state) => state.todos)
  //const todos = store.getState().todos; //direct access to store not recommended
  const dispatch = useDispatch();

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          // onClick={()=>{onToggle(index)}}
          onClick={()=>{dispatch(toggleTodo(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
