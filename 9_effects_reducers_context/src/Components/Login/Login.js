import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef
} from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";


// We create this reducer function outside the component function since it doesn't need any data of the component function and all the data it requires are passed to it by react.
const emailReducer = (state, action) => {

  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  // We also get the last state snapshot.

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  // We also get the last state snapshot.

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const emailInputRef=useRef();
  const passwordInputRef=useRef();

  const ctx = useContext(AuthContext);

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  // useEffect(()=>{
  //   console.log('EFFECT RUNNING');
  // },[]);

  // Also another problem with the below use effect is that since it depends on the whole emailState it will be called every time the input changes and hence too often.

  // So we need our useEffect to only depend on the isValid part of our state so we use object destructing to pull those properties out.

  // In the following statement we pull our the requirred property and assign it to another variable.

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      // Although we still refer to our state snapshots , this effect is guaranteed to rerun when the dependies change and hence it will get the latest snapshot of our state.

      // Now this effect runs only when the validity changes.

      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      // We clear the previous timer before calling the next one.
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);

    // Now we pass it an action to update the state.

    // This action can be anything is often an object which contains the fields we can use to update our state.

    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // Another problem with updating the state in this way is that we are updating the state using another state and we should not do this because react schedules state updates and our state might me outdate by the time we use it.

    // And it is anther scenario where we can use useReducer.

    // Even after using useReducer we still are depending on another state to change form valid state.

    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);

    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    // Here too we are dependencing on another state to update this state.

    // setEmailIsValid(emailState.isValid);

    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogin(emailState.value, passwordState.value);
    }
    else if(!emailState.isValid){
      emailInputRef.current.activate();
    }
    else{
      passwordInputRef.current.activate();
    }
  };

  return (
    <Card>
      <h1>Please Login</h1>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="Email"
          type="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailState.isValid}
          ref={emailInputRef}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordState.isValid}
          ref={passwordInputRef}
        />
        <Button type="submit">
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
