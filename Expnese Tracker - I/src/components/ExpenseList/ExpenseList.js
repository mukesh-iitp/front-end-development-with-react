// import React from "react";
import styles from "./ExpenseList.module.css";

// export default class ExpenseList extends React.Component {
export default function ExpenseList(props){
  // render() {
    return (
      <div className={styles.expenseListContainer}>
        <h3>Transactions</h3>
        <ul className={styles.transactionList}>
          {/* Display transactions here */}
          {props.transactionList.map((list,index) => {
            <Transaction list={list} index={index} />
          })}
        </ul>
      </div>
    );
  // }
}
