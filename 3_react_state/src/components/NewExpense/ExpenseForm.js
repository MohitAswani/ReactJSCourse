import React from "react";

import "./ExpenseForm.css";

// We want to add a eventListener on every key stroke and get the input values.

// We can either use onInput or onChange to listen to key stroke. But onChange works for all the inputs including drop downs.

// When we listen to events we automatically get an event object as an argument just like vanilla js.

// So the target object in the event object points to the dom element for which the event occured. The target object in turn holds many properties including the value property.

const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
