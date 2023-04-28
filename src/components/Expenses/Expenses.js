import React, { useContext } from "react";
import Card from '../UI/Card'
import ExpensesFilter from "./ExpenseFilter";
import './Expenses.css';
import Expenselist from "./Expenseslist";
import Expenseschart from "./Expenseschart";
import expenseContext from "../../store/expenseContext";

export default function Expenses(props) {
    const expensectx = useContext(expenseContext);
    const [filteredYear, setFilteredYear] = React.useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = expensectx.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <Expenseschart expenses = {filteredExpenses}/>
            <Expenselist items= {filteredExpenses} set={props.set} fetchExpense={props.fetchExpense} />
        </Card>
    )
}