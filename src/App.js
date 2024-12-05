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