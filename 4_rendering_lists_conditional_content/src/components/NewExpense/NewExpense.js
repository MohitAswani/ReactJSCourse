import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setFormVisible(false);
  };

  const addNewExpenseHandler = () => {
    setFormVisible(true);
  };

  const stopAddNewExpenseHandler = () => {
    setFormVisible(false);
  };

  if (formVisible) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStopAddNewExpense={stopAddNewExpenseHandler}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button onClick={addNewExpenseHandler}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;
