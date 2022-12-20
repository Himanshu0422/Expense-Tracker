import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../Card';

export default function ExpenseItem(props) {
    
    // const expenseDate = new Date(2022, 12, 19);
    // const expenseTitle = 'Food';
    // const expenseAmount = 50.98;

    return (
        <Card className='expense-item'>
            <ExpenseDate date= {props.date}/>
            <div className='expense-item_descrip'>
                <h2>{props.title}</h2>
                <div className='expense-item_price'>${props.amount}</div>
            </div>
        </Card>
    );
}