import React, { useContext } from "react";

import MainHeader from "./Components/MainHeader/MainHeader";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import AuthContext from "./store/auth-context";

import "./App.css";

function App() {

  // If we use the following way to retrieve logged in status it will create an infinite loop since we are changing a state which will call this function again and again.

  // And that is why we need useEffect which will allow us to control when this function runs.

  // const storedUserLoggedIn=localStorage.getItem("isLoggedIn");

  // if(storedUserLoggedIn==='1')
  // {
  //   setIsLoggedIn(true);
  // }

  // We can run our logic in this hook and this will only run when the component is initially evaluated and then after only when the dependencies change.

  // And if we pass no dependencies it will run only when the component is evaluated initially.

  // Also this is a side effect since it doesn't change the ui directly.
  // useEffect(() => {
  //   const storedUserLoggedIn = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedIn === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   localStorage.setItem("isLoggedIn", "1");

  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");

  //   setIsLoggedIn(false);
  // };

  // To use the context we need to wrap the components in it.

  // Also the auth context is not a component and in jsx we need a component and we can get that by calling the provider property which contains the component.

  // The components which are wrapped by the auth context component and those components and their descendant component will have access to that context.

  // We can remove the fragment.

  // We set the value in the context to the isLoggedIn state variable of App component. And we dont need the prop to use.

  const ctx=useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login></Login>}
        {ctx.isLoggedIn && <Home/>}
      </main>
    </React.Fragment>
  );
}

export default App;
