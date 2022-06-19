// We importing specifically named things from react library.

import React, { useState } from "react";

import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // Naming convention is to end with Handler.

  // const clickHandler = () => {
  //   // This won't work.

  //   // We want the component to be revaluated when the button is clicked.

  //   setTitle("Updated!!!");
  // };

  // We need to react to the button click to change title.

  // On all the HTML elements we have full access to all native DOM events which we can listen to.

  // Becuase react exposes all these default elements as props which start with on.

  // So we set the value of that prop with a function which needs to be executed when that event occurs.

  // We can create a function on the fly or make a seperate function definition before we return.

  // And in onclick we just point to the function and not execute it (DONT ADD PARANTHESIS).
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
