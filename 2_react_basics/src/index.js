// Basically whenever we import anything from react / react-dom its all about react and we are using react features.
// Makes a feature from the react library available in index.js
import ReactDOM from "react-dom/client";

// This is the first file to be executed.

// this only works in react and not in vanilla js
// this tells react app to include this css code in the project and use it.
import "./index.css";

// App in the end is an component , and this is what we render in our div with id root.
import App from "./App";

// This method creates the main entry point, the main hook of the overall user interface we are about to build with react.
// This tell react where this user interface which we build with react in the end should be placed in the web page.
// The index.html in the public folder is the single HTML file which is in the end loaded by the browser.
// It is the only HTML file which is being used by this app coz it is an single-page app.
// This is file which is the entry point , the place where the react-driven user interface should be rendered into.
// The div will the id root is the div where we want to attach or inject our react-driven user interface.
// We select that div and then use a method from the react library to tell react that this should be the root of our react application. The main where the react application gets rendered to.
// Then we store that root object.
const root = ReactDOM.createRoot(document.getElementById("root"));

// This is another example of unusual code working here which would not work in normal js.
// Idea is that we can write some code in a easy way and then still have code which runs in all browsers.
// And on the root object we call the render method to tell react what should be render into that div.
// The below is not a regular js syntax rather its a syntax called jsx.
root.render(<App />);

// We omit .js extension.
