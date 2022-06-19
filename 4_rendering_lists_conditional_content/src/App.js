import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car insurance",
    amount: 299.99,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e2",
    title: "Toilet paper",
    amount: 29.99,
    date: new Date(2022, 5, 26),
  },
  {
    id: "e3",
    title: "Gun",
    amount: 199.99,
    date: new Date(2022, 1, 30),
  },
  {
    id: "e4",
    title: "Grocery",
    amount: 599.99,
    date: new Date(2021, 7, 31),
  },
  {
    id: "e5",
    title: "Home insurance",
    amount: 299.99,
    date: new Date(2022, 4, 18),
  },
];

const App = () => {

  // Stateful lists
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
