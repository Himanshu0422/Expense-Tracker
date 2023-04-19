import React, { useState, useContext } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import axios from 'axios'
import expenseContext from "../../store/expenseContext";

export default function ExpenseItem(props) {
    const expensectx = useContext(expenseContext);
    const [editMode,setEditMode] = useState(false);
    const [title,setTitle] = useState(props.title);
    const [amount,setAmount] = useState(props.amount);
    const [updatedDate, setDate] = useState(props.date);

    function handleEdit(){
        setEditMode(true);
    }
    function handleTitle(e){
        setTitle(e.target.value);
    }
    function handleAmount(e){
        setAmount(e.target.value);
    }
    function handleDate(e){
        setDate(e.target.value);
    }
    function handleSave(){
        setEditMode(false);
        editBase();
    }

    async function editBase(){
        const updateValues = {
            ...props,
            title:title,
            amount:amount,
            date: updatedDate
        }
        await axios.put(`/data/${props.id}`, updateValues);
        expensectx.fetchExpense()
    }

    return (
        <li>
            <Card className='expense-item'>
            {!editMode ? <ExpenseDate date= {new Date(updatedDate)}/> : <input value={updatedDate} onChange={handleDate} type='date'/>}
                <div className='expense-item_descrip'>
                    <h2>{!editMode? title: <input value={title} onChange={handleTitle} type='text' />}</h2>
                    <div className='expense-item_price'>{!editMode? amount : <input value={amount} onChange={handleAmount} type='number' />}</div>
                </div>
                <button className='edit-button' onClick={() => {expensectx.deleteExp(props.id)}}>Delete</button>
                {!editMode? <button className='edit-button' onClick={handleEdit}>Edit</button>:<button className='edit-button' onClick={handleSave}>Save</button>}
            </Card>
        </li>
    );
}