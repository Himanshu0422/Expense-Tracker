import React from "react";
import Card from '../UI/Card'
import ExpensesFilter from "./ExpenseFilter";
import './Expenses.css';
import Expenselist from "./Expenseslist";
import Expenseschart from "./Expenseschart";

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = React.useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <Expenseschart expenses = {filteredExpenses}/>
            <Expenselist items= {filteredExpenses} set={props.set} />
        </Card>
    )
}