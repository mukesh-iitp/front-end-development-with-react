import "./NoteList.css";
import { useSelector } from "react-redux";

function NoteList() {
    const notes=useSelector((state) => state.noteReducer.notes);
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger">Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
