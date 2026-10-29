// import React from "react";
import { useState, useEffect } from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
  // Add logic here to calculate the grand total, profit and expense amount here
  const { expenses } = props;
  const [info, setInfo] = useState({
    currentBalance: 0,
    income: 0,
    expense: 0
  })

  useEffect(() => {
    let newCurrentBalance = 0;
    let newIncome = 0;
    let newExpense = 0;
    expenses.map((obj) => {
      if (obj.amount >= 0) {
        newIncome += parseFloat(obj.amount);
      } else {
        newExpense += parseFloat(obj.amount);
      }
      newCurrentBalance = newIncome + newExpense;
    })
    setInfo({
      currentBalance: newCurrentBalance,
      income: newIncome,
      expense: newExpense
    })
  }, [expenses])


  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${info.currentBalance.toFixed(2)/* Grand total should be displayed here */}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${info.income/*Total Profit Amount should be displayed here */}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${info.expense*-1/* Total expense amount should be displayed here */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
