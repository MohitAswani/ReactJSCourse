import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      amount: 299.99,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e2",
      title: "Toilet paper",
      amount: 29.99,
      date: new Date(2022, 2, 26),
    },
    {
      id: "e3",
      title: "Gun",
      amount: 1999.99,
      date: new Date(2022, 2, 30),
    },
    {
      id: "e4",
      title: "Grocery",
      amount: 599.99,
      date: new Date(2022, 2, 31),
    },
    {
      id: "e5",
      title: "Home insurance",
      amount: 29999.99,
      date: new Date(2022, 2, 18),
    },
  ];

  const addExpenseHandler=(expense)=>{
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );

};

export default App;
