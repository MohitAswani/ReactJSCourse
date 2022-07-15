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

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

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
