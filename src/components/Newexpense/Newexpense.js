import React from "react";
import Expenseform from "./Expenseform";
import './Newexpense.css';

export default function Newexpense(props) {

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <Expenseform onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    )
}