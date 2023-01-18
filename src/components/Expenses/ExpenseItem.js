import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

export default function ExpenseItem(props) {

    const [editMode,setEditMode] = useState(false)
    const [title,setTitle] = useState(props.title)
    const [amount,setAmount] = useState(props.amount)

    function handleEdit(){
        setEditMode(true)
    }
    function handleTitle(e){
        setTitle(e.target.value)
    }
    function handleAmount(e){
        setAmount(e.target.value)
    }
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date= {props.date}/>
                <div className='expense-item_descrip'>
                    <h2>{!editMode? title: <input value={title} onChange={handleTitle} type='text' />}</h2>
                    <div className='expense-item_price'>{!editMode? amount : <input value={amount} onChange={handleAmount} type='number' />}</div>
                </div>
                <button className='edit-button' onClick={() => {props.set(props.id)}}>Delete</button>
                {!editMode? <button className='edit-button' onClick={handleEdit}>Edit</button>:<button className='edit-button' onClick={()=>setEditMode(false)}>Save</button>}
            </Card>
        </li>
    );
}