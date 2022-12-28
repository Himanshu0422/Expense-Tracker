import React from "react";
import Card from '../UI/Card'
// import ExpenseItem from './ExpenseItem';
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
            <Expenselist items= {filteredExpenses}/>
        </Card>
    )
}


// <ExpenseItem
//     title={props.items[0].title}
//     amount={props.items[0].amount}
//     date={props.items[0].date} />
// <ExpenseItem
//     title={props.items[1].title}
//     amount={props.items[1].amount}
//     date={props.items[1].date} />
// <ExpenseItem
//     title={props.items[2].title}
//     amount={props.items[2].amount}
//     date={props.items[2].date} />
// <ExpenseItem
//     title={props.items[3].title}
//     amount={props.items[3].amount}
//     date={props.items[3].date} />