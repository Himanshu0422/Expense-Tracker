import React from "react";

const expenseContext = React.createContext({
    expenses: [],
    addExpense: (expense) => {},
    removeExpense: (id) => {},
});

export default expenseContext;