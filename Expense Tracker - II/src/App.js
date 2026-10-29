import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Create function to add an expense
  const handleFormSubmit = (text, amount) => {
    setExpenses([{ text, amount }, ...expenses])
  }

  // Create function to delete an expense
  const deleteTransaction = (index) => {
    let newExpensesList = expenses.filter((expense, i) => i !== index)
    setExpenses(newExpensesList)
  }

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm handleFormSubmit={handleFormSubmit} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} deleteTransaction={deleteTransaction} />
        </div>
      </div>
    </>
  );
}

export default App;
