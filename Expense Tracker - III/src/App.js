//import { useState } from "react";
import useReducerFunction from "./components/Reducer/Reducer";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";
import { useReducer} from "react";

function App() {
  // Remove the useState hook and replace it with useReducer hook
  // Implement the functionality to add and remove the transaction in reducer function
  // const [expenses, setExpenses] = useState([]);
  const { expenses, handleFormSubmit, deleteExpense } = useReducerFunction();

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm handleFormSubmit={handleFormSubmit} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
        </div>
      </div>
    </>
  );
}

export default App;
