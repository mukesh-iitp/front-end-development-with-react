import React from "react";
import styles from "../styles/Total.module.css";
import { useContext } from "react";
// import { itemContext } from "../itemContext";
// import { totalContext } from "../totalContext";
import { useValue } from "../itemContext";

function Navbar() {
  // const value = useContext(itemContext);
  // const {item,total} = useValue();
  const value = useValue();
  console.log(value);
  // const {item} = useContext(itemContext);
  // const {total} = useContext(totalContext);

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {value.total}</h1>
      <h1>Items: {value.item}</h1>
      {/* <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1> */}
    </div>
  );
}

export default Navbar;
