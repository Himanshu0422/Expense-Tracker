// import axios from 'axios';
// import React, { useEffect } from 'react';
// import Expenses from './components/Expenses/Expenses';
// import Newexpense from './components/Newexpense/Newexpense';

// export default function App() {

// 	const [expenses, setExpenses] = React.useState([]);

// 	const fetchExpense = async () => {
// 		try{
// 			const res = await axios.get('/data');
// 			const data = res.data;
// 			if(res.status !==200){
// 				throw new Error('Something failed');
// 			}

// 			const expensess = [];
// 			for(let key of data){
// 				expensess.push({
// 					id: key.id,
// 					title: key.title,
// 					amount: key.amount,
// 					date: new Date(key.date)
// 				})
// 			}
// 			setExpenses(expensess);
// 		}
// 		catch(error){
// 			console.log(error.message);
// 		}
// 	}

	// useEffect(() => {
	// 	fetchExpense();
	// }, []);

	// const addExpense = async (expense)=>{
	// 	const res = await axios.post('/data', expense)
	// 	fetchExpense();
	// }

	// const deleteExp = async (key)=>{
	// 	await axios.delete(`/data/${key}`);
	// 	fetchExpense()
	// }

// 	return (
// 		<div>
// 			<Newexpense onAddExpense={addExpense} />
// 			<Expenses items={expenses} set={deleteExp} fetchExpense={fetchExpense} />
// 		</div>
// 	);
// }

import React from 'react';
import Expenses from './components/Expenses/Expenses';
import Newexpense from './components/Newexpense/Newexpense';

export default function App() {
	return (
		<React.Fragment >
			<Newexpense />
			<Expenses />
		</React.Fragment>
	);
}