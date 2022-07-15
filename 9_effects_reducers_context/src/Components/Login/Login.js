import React, { useState, useRef, useEffect } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import classes from "./Login.module.css";

const Login = (props) => {
  const emailLabelRef = useRef();
  const passwordLabelRef = useRef();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(()=>{
  //   console.log('EFFECT RUNNING');
  // },[]);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     // We clear the previous timer before calling the next one.
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  useEffect(() => {
    emailLabelRef.current.innerHTML = emailLabelRef.current.innerText
      .split("")
      .map((letter, index) => {
        return `<span style="transition-delay:${
          50 * index
        }ms">${letter}</span>`;
      })
      .join("");

    passwordLabelRef.current.innerHTML = passwordLabelRef.current.innerText
      .split("")
      .map((letter, index) => {
        return `<span style="transition-delay:${
          50 * index
        }ms">${letter}</span>`;
      })
      .join("");
  }, [emailLabelRef, passwordLabelRef]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    // Another problem with updating the state in this way is that we are updating the state using another state and we should not do this because react schedules state updates and our state might me outdate by the time we use it.

    // And it is anther scenario where we can use useReducer.

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      enteredEmail.includes("@") && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {

    // Here too we are dependencing on another state to update this state.
    
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card>
      <h1>Please Login</h1>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes["form-control"]} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            required
          />
          <label ref={emailLabelRef} htmlFor="email">
            Email
          </label>
        </div>
        <div
          className={`${classes["form-control"]} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            required
          />
          <label ref={passwordLabelRef} htmlFor="password">
            Password
          </label>
        </div>
        <Button type="submit" disabled={!formIsValid}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
