import { useState } from "react";

export default function useReducerFunction() {
    const [expenses, setExpenses] = useState([]);

    // Create function to add an expense
    const handleFormSubmit = (expense) => {
        setExpenses([expense, ...expenses])
    }
    // Create function to delete an expense
    const deleteExpense = (id) => {
        let newExpensesList = expenses.filter((expense) => expense.id !== id)
        setExpenses(newExpensesList)
    }
    return { expenses, handleFormSubmit, deleteExpense }
}