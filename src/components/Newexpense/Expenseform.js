import React, { useContext, useState } from "react";
import "./Expenseform.css";
import expenseContext from "../../store/expenseContext";

export default function Expenseform(props) {
    const expensectx = useContext(expenseContext);
    const [enteredData, setEnteredData] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    });

    const [errors, setErrors] = useState({
        title: false,
        amount: false,
        date: false,
    });

    const validateForm = () => {
        const errors = {
            title: enteredData.enteredTitle.trim() === "",
            amount: enteredData.enteredAmount.trim() === "" || +enteredData.enteredAmount <= 0,
            date: enteredData.enteredDate.trim() === "" || new Date(enteredData.enteredDate) > new Date(),
        };
        setErrors(errors);
        return !Object.values(errors).includes(true);
    };

    const titleChange = (event) => {
        setEnteredData((prevState) => ({
            ...prevState,
            enteredTitle: event.target.value,
        }));
    };

    const amountChange = (event) => {
        setEnteredData((prevState) => ({
            ...prevState,
            enteredAmount: event.target.value,
        }));
    };

    const dateChange = (event) => {
        setEnteredData((prevState) => ({
            ...prevState,
            enteredDate: event.target.value,
        }));
    };

    const submithandler = (event) => {
        event.preventDefault();

        if (!validateForm()) return;

        const expenseData = {
            title: enteredData.enteredTitle,
            amount: +enteredData.enteredAmount,
            date: new Date(enteredData.enteredDate),
            id: Math.random().toString(),
        };
        expensectx.addExpense(expenseData);

        // Reset form
        setEnteredData({
            enteredTitle: "",
            enteredAmount: "",
            enteredDate: "",
        });
        setErrors({
            title: false,
            amount: false,
            date: false,
        });
    };

    return (
        <form onSubmit={submithandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={titleChange}
                        value={enteredData.enteredTitle}
                        className={errors.title ? "invalid" : ""}
                    />
                    {errors.title && <p className="error-text">Title is required.</p>}
                </div>
                <div className="new-expense_control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={amountChange}
                        value={enteredData.enteredAmount}
                        className={errors.amount ? "invalid" : ""}
                    />
                    {errors.amount && <p className="error-text">Enter a valid amount greater than 0.</p>}
                </div>
                <div className="new-expense_control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        onChange={dateChange}
                        value={enteredData.enteredDate}
                        className={errors.date ? "invalid" : ""}
                    />
                    {errors.date && <p className="error-text">Enter a valid date (not in the future).</p>}
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}