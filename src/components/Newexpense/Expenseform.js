import React, { useContext } from "react";
import './Expenseform.css';
import expenseContext from "../../store/expenseContext";

export default function Expenseform(props) {
    const expensectx = useContext(expenseContext);
    const [enteredData, setEnteredData] = React.useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChange = (event) => {
        setEnteredData((prevstate) => {
            return {
                ...prevstate,
                enteredTitle: event.target.value
            };
        });
    };
    const amountChange = (event) => {
        setEnteredData((prevstate) => {
            return {
                ...prevstate,
                enteredAmount: event.target.value
            };
        });
    }
    const dateChange = (event) => {
        setEnteredData((prevstate) => {
            return {
                ...prevstate,
                enteredDate: event.target.value
            };
        });
    }

    const submithandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredData.enteredTitle,
            amount: +enteredData.enteredAmount,
            date: new Date(enteredData.enteredDate),
            id: Math.random().toString()
        }
        expensectx.addExpense(expenseData)
        setEnteredData({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
    };

    return (
        <form onSubmit={submithandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input
                        type='text'
                        onChange={titleChange}
                        value={enteredData.enteredTitle}
                    />
                </div>
                <div className="new-expense_control">
                    <label>Amount</label>
                    <input
                        type='number'
                        min="1"
                        step="0.1"
                        onChange={amountChange}
                        value={enteredData.enteredAmount}
                    />
                </div>
                <div className="new-expense_control">
                    <label>Date</label>
                    <input
                        type='date'
                        min="2019-01-01"
                        max="2023-12-31"
                        onChange={dateChange}
                        value={enteredData.enteredDate}
                    />
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}