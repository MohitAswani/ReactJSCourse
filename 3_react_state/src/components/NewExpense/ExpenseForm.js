import React, { useState } from "react";

import "./ExpenseForm.css";

// We want to add a eventListener on every key stroke and get the input values.

// We can either use onInput or onChange to listen to key stroke. But onChange works for all the inputs including drop downs.

// When we listen to events we automatically get an event object as an argument just like vanilla js.

// So the target object in the event object points to the dom element for which the event occured. The target object in turn holds many properties including the value property.

const ExpenseForm = (props) => {
  // We are storing a string becuase the event will return us a string.

  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  // So we can have multiple states in a single component and update and manage them seperately.

  // All three of the above state are related to a single form hence we can go for one state.

  // So call useState once and pass in an object to it.

  // Difference now is that whenever we update one state , we need to update all three properties.

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // To preserve this value and to make sure that we don't lose it we use state.

    // Although we are not storing it to display it but the component will still update and the variable will store the value so that we can use it.

    // console.log(event.target.value);
    // setEnteredTitle(event.target.value);

    // And when we call this function we also need to set the two other values or else we will simply lose them.

    // To take the previous values we use the spread operator which pulls out all the properties and then sets them as we wanted and then overides the enteredTitle.

    // The issue with updating the state like this is that we are depending on the previous state snapshot to copy in the existing values.

    // WHENEVER WE UPDATE OUR STATE AND WE DEPEND ON THE PREVIOUS STATE WE SHOULD NOT DO IT LIKE THIS AND WE SHOULD USE AN ALTERNATIVE FORM.

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });

    // Rather we call the setUserInput function and pass in a function to it. This function will automatically get the previous state snapshot as an argument and we need to return the new state.

    // The reason for this is that react schedules state update and doesn't perform them instantly and therefore we could get an outdated value for the previous state.

    // But if we do it in the following way react will make sure that we get the latest state snapshot keeping all schedule state updates in mind.

    // WE SHOULD ALWAYS USE THIS FUNCTION FORMAT WHEN OUR STATE UPDATE DEPENDS ON THE PREVIOUS STATE.

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  // When we click the submit button of a form the overall form element emits an event to which we can listen (default browser behaviour) and that event is the submit event.

  // But the issue with this approach is that when we submit the form the whole page reloads because the browser automatically send a request to the server. But we can disable this behivour in the following way.

  const submitHandler = (event) => {

    // This is js function which prevents default behaviour.
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    // We call the passed in function after the form is submitted.

    // We can execute this function becuase we pass in a reference to it using props.
    
    props.onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
