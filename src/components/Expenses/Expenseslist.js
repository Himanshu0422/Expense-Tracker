import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenseslist.css'

export default function Expenselist(props) {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found No expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map(expense => {
                return (
                    <ExpenseItem
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        set={props.set}
                        key={expense.id}
                        fetchExpense={props.fetchExpense}
                    />
                )
            })}
        </ul>
    )
}