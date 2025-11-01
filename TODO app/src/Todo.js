import { Component } from "react";

export class Todo extends Component {
  render() {

    const { todo, index, handleRemove } = this.props;

    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        {/* Add the onClick event to handle removal of the todos */}
        <button onClick={() => handleRemove(index)}>x</button>
      </div>
    );
  }
}
