import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useContext } from "react";
import { itemContext } from "../itemContext";

function ItemCard({ name, price }) {

  // const value = useContext(itemContext);
  // const {setTotal} = value;
  const {total, setTotal, item, setItem} = useContext(itemContext);

  const handleAdd = () => {
    setTotal(total+price)
    setItem(item+1)
  };

  const handleRemove = () => {
    //setTotal(total-price)
    if(total<=0 || item <=0)
      return
    setTotal((prevState) => prevState - price)
    setItem(item -1)
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
