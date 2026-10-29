import { useContext } from "react";
import { colorContext } from "../context";

// const GrandChildComponent = (props) => (
function GrandChildComponent() {

  const color = useContext(colorContext);
  console.log(color);

  // <p style={{ color: props.color }}>Color: {props.color}</p>
  return (
  <p style={{ color: color }}>Color: {color}</p>
  )

}
// );

export default GrandChildComponent;
