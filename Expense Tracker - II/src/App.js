import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Create function to add an expense

  // Create function to delete an expense

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </>
  );
}

export default App;
