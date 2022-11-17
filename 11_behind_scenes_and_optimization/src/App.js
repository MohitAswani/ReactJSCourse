import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  // React re-evaluates only if a state, prop or a context changes.

  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParaHandler = useCallback(() => {
    if (allowToggle) {
      setShowPara((prevState) => {
        return !prevState;
      });
    }
  }, [allowToggle]); // we dont have to add setShowPara since it never changes

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  console.log("APP RUNNING");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara} />
      <Button onClick={allowToggleHandler}>Allow toggle</Button>
      <Button onClick={toggleParaHandler}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
