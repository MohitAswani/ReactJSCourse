import ExpenseItem from "./components/ExpenseItem";

// Below is an function which returns jsx (which is a special syntax introduced by the react team and it works in js files because of overall project setup).
// JSX stand for js XML because HTML in the end is XML.
// This only works because of the process which is running to transform it to a workable code.
// In regular js we will need to get the element and then add the element to the dom. (Imperative approach, clear step by step instruction) This works but becomes very complex for large projects.
// With react we define what we want and then react will generate these instructions behind the scenes to bring onto the screen.

// We can simply use our custom element like a normal HTML tag, the difference is that it must start with a uppercase character. So that react can detect this custom element and smaller case element are html elements.
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

// We export the App function.
export default App;
