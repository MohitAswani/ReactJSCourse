// Tells the build process that this css file should be considered.

import './ExpenseItem.css';

// A component in react is just a js function, a special kind of function which returns jsx code.

// ONE IMPORTANT RULE TO RETURN JSX CODE IS THAT WE MUST ONLY HAVE ONE ROOT ELEMENT PER RETURN STATEMENT.

// INSIDE THE ROOT ELEMENT WE CAN HAVE AS MANY DIV AS WE WANT.

// We dont type class in jsx code , we type className to give classes. Coz its not really html. It was renamed coz class is a reserved word in react.

function ExpenseItem() {
  //   return (<div>Date</div><div><h2>Title</h2></div><div>Amount</div>);  // More than one root element
  return (
    <div className='expense-item'>
      <div>March 28th 2022</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>$299.99</div>
      </div>
    </div>
  );
}

// This is how we export our component.
// We export this function as the default of this file
export default ExpenseItem;

// After this we can import it in another file, but we are not going to import it into index.js and we are not going to render it like App.js. Because we only do that once for our root component.

// Instead we use our custom component like a regular HTML element inside of the html code in App component.
