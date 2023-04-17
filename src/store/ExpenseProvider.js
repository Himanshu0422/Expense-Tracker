
// const expenseReducer = (state, action) => {
//     if(action.type === 'ADD'){
//         let updatedExpenses;
//         updatedExpenses = [
//             action.expense,
//             ...state.expenses
//         ]
//         return{
//             expenses: updatedExpenses
//         }
//     }
//     if(action.type === 'DELETE'){
//         let updatedExpenses;
//         updatedExpenses = state.expenses.filter(expense => expense.id !== action.id);
//         return{
//             expenses: updatedExpenses
//         }
//     }
// }





import axios from 'axios';
import React, { useEffect, useState } from "react";
import ExpenseContext from "./expenseContext";

export default function ExpenseProvider(props){
    const [expenses,setExpenses] = useState([])
    const fetchExpense = async () =>{
        try{
			const res = await axios.get('/data');
			const data = res.data;
			if(res.status !==200){
				throw new Error('Something failed');
			}
            
			const expenseData = [];
			for(let key of data){
                expenseData.push({
                    id: key.id,
					title: key.title,
					amount: key.amount,
					date: new Date(key.date)
				})
			}
			setExpenses(expenseData)
		}
		catch(error){
			console.log(error.message);
		}
    }
    const addExpense = async (expense)=>{
		const res = await axios.post('/data', expense)
		fetchExpense();
	}
    const deleteExp = async (key)=>{
		await axios.delete(`/data/${key}`);
		fetchExpense()
	}
    useEffect(() => {
        fetchExpense();
    }, []);
    const value = {
        expenses,
        addExpense,
        deleteExp,
        fetchExpense
    }
    return(
        <ExpenseContext.Provider value={value}>
            {props.children}
        </ExpenseContext.Provider>
    )
}







// const [expenseState, dispatch] = useReducer(expenseReducer, defaultExpenseState);

// const addExpenseHandler = (expense) => {
//     dispatch({type: 'ADD', expense: expense})
// }
// const removeExpenseHandler = (id) => {
//     dispatch({type: 'DELETE', id: id})
// }

// const expenseContext = {
//     expenses: defaultExpenseState
    // addExpense: addExpenseHandler,
    // removeExpense: removeExpenseHandler
// }