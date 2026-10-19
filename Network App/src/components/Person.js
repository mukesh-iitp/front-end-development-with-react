import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  componentWillUnmount(){
    alert(`A person with email ${this.props.person.email} was removed from your network!`);
  }
  

  render() {
    const { handleDelete, index } = this.props;
    const { img, email } = this.props.person;
    return (
      <div className="person">
        {/* <b onClick={() => this.props.handleDelete(this.props.index)} >X</b> */}
        <b onClick={() => handleDelete(index)}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
