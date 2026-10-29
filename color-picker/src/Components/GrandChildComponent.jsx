// import { useContext } from "react";
import { colorContext } from "../context";

// const GrandChildComponent = (props) => (
function GrandChildComponent() {

  // const color = useContext(colorContext);
  // const value = useContext(colorContext);
  // console.log(value.color);

  // <p style={{ color: props.color }}>Color: {props.color}</p>
  return (
    // <p style={{ color: value.color }}>Color: {value.color}</p>
    //use of colorContext.Consumer
    <colorContext.Consumer> 
      {(value) => <p style={{ color: value.color }}>Color:{value.color}</p>}
    </colorContext.Consumer>
  )

}
// );

export default GrandChildComponent;
