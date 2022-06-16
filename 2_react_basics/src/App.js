import React from "react";
import Expenses from "./components/Expenses/Expenses";

// Below is an function which returns jsx (which is a special syntax introduced by the react team and it works in js files because of overall project setup).
// JSX stand for js XML because HTML in the end is XML.
// This only works because of the process which is running to transform it to a workable code.
// In regular js we will need to get the element and then add the element to the dom. (Imperative approach, clear step by step instruction) This works but becomes very complex for large projects.
// With react we define what we want and then react will generate these instructions behind the scenes to bring onto the screen.

// We can simply use our custom element like a normal HTML tag, the difference is that it must start with a uppercase character. So that react can detect this custom element and smaller case element are html elements.
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );

  // Without jsx code

  // When we use jsx this is the method which is called.

  // This method takes 3 element, the element to be built , object which sets the attributes of this element, rest of the arguments content betweeen the tag.

  // For custom component we point to the custom component.

  // Below code is the alternative to using the jsx code, by using the createElement function.

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started!"),
  //   React.createElement(Expenses, { expenses: expenses }, "")
  // );
};

// We export the App function.
export default App;
