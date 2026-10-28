import "./App.css";
import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

// export default class App extends React.Component {
export default function App(props){
  // Create state for the expenses here
  const [grandTotal, setGrandTotal] = useState(123);
  const [transactionList, setTransactionList] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const handleSetExpense = (text, amount) => {
    const newExpense = { text, amount };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };
  
  const handleSetTransactionList = (transaction) => {
    setTransactionList((prevTransactionList) => [...prevTransactionList, transaction]);
  };

  const handleSetGrandTotal = (value) => {
    setGrandTotal((prevGrandTotal) => prevGrandTotal + value);
  };
  
  // render() {
    return (
      <>
        <h2 className="mainHeading">Expense Tracker</h2>
        <div className="App">
          {/* Render expense form here */}
          <ExpenseForm setExpense={handleSetExpense} />
          <div className="expenseContainer">
            {/* Render Expense Info here
            Render Expense List here */}
            <ExpenseInfo grandTotal={grandTotal} />
            <ExpenseList transactionList={transactionList} />
          </div>
        </div>
      </>
    );
  // }
}
