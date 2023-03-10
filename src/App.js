import React from 'react';
import Expenses from './components/Expenses/Expenses';
import Newexpense from './components/Newexpense/Newexpense';

const dummy_expenses = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: 'e2',
		title: 'New TV',
		amount: 799.49,
		date: new Date(2021, 2, 12)
	},
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

export default function App() {

	const [expenses, setExpenses] = React.useState(dummy_expenses);

	const addExpenseHandler = expense => {
		setExpenses((prevExpenses) => {
			return [
				expense,
				...prevExpenses
			]
		})
	}

	const deleteExp = (key)=>{
		var arr = expenses.filter((ele)=>{
			return ele.id !== key
		})

		setExpenses(arr);
	}

	return (
		<div>
			<Newexpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} set={deleteExp} />
		</div>
	);
}