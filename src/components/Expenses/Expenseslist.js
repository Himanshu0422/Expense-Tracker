import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenseslist.css'

export default function Expenselist(props) {
    // const hlo = props.items.length === 0 ?
    //     (<p>No Expense</p>) :

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found No expenses.</h2>
    }

    // function expenseDel(key){
    //     const fil = props.items.filter((ele)=>{
    //         return ele.id !==key
    //     }) 
    //     props.set(fil)
    // }

    return (
        <ul className="expenses-list">
            {props.items.map(expense => {
                console.log(expense.id);
                return (
                    <ExpenseItem
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        set={props.set}
                    />
                )
            })}
        </ul>
    )
}