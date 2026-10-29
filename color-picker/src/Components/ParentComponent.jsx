import { useState } from "react";
import ChildComponent from "./ChildComponent";
import { colorContext } from "../context";

const ParentComponent = (props) => {

  console.log(colorContext);
  const [color, setColor] = useState("#000000");

  return (
    <>
    {/* <colorContext.Provider> */}
      <h1>Pick a color</h1>
      <input
        type="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        value={color}
      />
    {/* <colorContext.Provider value="red"> */}
    <colorContext.Provider value={{color, setColor}}>
      {/* <ChildComponent color={color} /> */}
      <ChildComponent/>
    </colorContext.Provider>
    </>
  );
};

export default ParentComponent;
