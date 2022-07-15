import React, { useState, useEffect } from "react";

import MainHeader from "./Components/MainHeader/MainHeader";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // If we use the following way to retrieve logged in status it will create an infinite loop since we are changing a state which will call this function again and again.

  // And that is why we need useEffect which will allow us to control which this function runs.

  // const storedUserLoggedIn=localStorage.getItem("isLoggedIn");

  // if(storedUserLoggedIn==='1')
  // {
  //   setIsLoggedIn(true);
  // }

  // We can run our logic in this hook and this will only run when the component is initially evaluated and then after only when the dependencies change.

  // And if we pass no dependencies it will run only when the component is evaluated initially.

  // Also this is a side effect side it doesn't change the ui directly.
  useEffect(() => {
    const storedUserLoggedIn = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler}></Login>}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
