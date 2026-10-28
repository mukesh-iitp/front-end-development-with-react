// import React from "react";
import styles from "./ExpenseForm.module.css";

// export default class ExpenseForm extends React.Component {
export default function ExpenseForm(props){
  // Create state or ref for the inputs here

  const handleBtnClick = (e) => {
    e.preventDefault(); // Prevent the form from submitting

    const expenseText = document.getElementById("expenseText").value;
    const expenseAmount = document.getElementById("expenseAmount").value;

    const newTransaction = {
      text: expenseText,
      amount: parseFloat(expenseAmount),
    };

    props.setExpense(newTransaction);
  };

  // render() {
    return (
      <form className={styles.form} onSubmit={() => {}}>
        <h3>Add new transaction</h3>
        <label htmlFor="expenseText">Text</label>
        <input
          id="expenseText"
          className={styles.input}
          type="text"
          placeholder="Enter text..."
          required
        />
        <div>
          <label htmlFor="expenseAmount">Amount</label>
          <div>(negative - expense,positive-income)</div>
        </div>
        <input
          className={styles.input}
          id="expenseAmount"
          type="number"
          placeholder="Enter amount..."
          required
        />
        <button onClick={handleBtnClick} className={styles.submitBtn}>Add Transaction</button>
      </form>
    );
  // }
}
