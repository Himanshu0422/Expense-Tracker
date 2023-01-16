import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

export default function ExpenseItem(props) {

    {console.log(props.key)}
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date= {props.date}/>
                <div className='expense-item_descrip'>
                    <h2>{props.title}</h2>
                    <div className='expense-item_price'>${props.amount}</div>
                </div>
                <button onClick={() => {props.set(props.id)}}>Delete</button>
            </Card>
        </li>
    );
}