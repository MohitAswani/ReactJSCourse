
// Tells the build process that this css file should be considered.

import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// A component in react is just a js function, a special kind of function which returns jsx code.

// ONE IMPORTANT RULE TO RETURN JSX CODE IS THAT WE MUST ONLY HAVE ONE ROOT ELEMENT PER RETURN STATEMENT.

// INSIDE THE ROOT ELEMENT WE CAN HAVE AS MANY DIV AS WE WANT.

// We dont type class in jsx code , we type className to give classes. Coz its not really html. It was renamed coz class is a reserved word in react.

// After we set the attributes in our App.js file we get one paramater in this component and that one paramter is an object which holds all the received attributes as properties hence the name props (we can name it anything).

// This object has key value pairs.

const ExpenseItem = (props) => {
  //   return (<div>Date</div><div><h2>Title</h2></div><div>Amount</div>);  // More than one root element

  // regular js
  // const expenseDate = new Date(2022,2,28);
  // const expenseTitle='Car insurance';
  // const expenseAmount=299.99;

  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();

  // React gives us a special syntax to write dynamic data in our jsx code by using {}.

  // We can make our components reusable by using parameters and a concept called props in react.

  // To get the look of date like a calender we make 3 divs and add the day,month and year into it.

  // But out of the box we can't use our custom components like wrappers arround other content.
  return (
    // Card is our default component which we make to act like a wrapper.

    // Every default HTML element supports className and other default attributes but our custom components support only what we tell them to support.
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

// This is how we export our component.
// We export this function as the default of this file
export default ExpenseItem;

// After this we can import it in another file, but we are not going to import it into index.js and we are not going to render it like App.js. Because we only do that once for our root component.

// Instead we use our custom component like a regular HTML element inside of the html code in App component.
