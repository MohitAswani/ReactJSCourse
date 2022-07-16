import React, { useRef, useEffect, useImperativeHandle } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputLabelRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    inputLabelRef.current.innerHTML = inputLabelRef.current.innerText
      .split("")
      .map((letter, index) => {
        return `<span style="transition-delay:${
          50 * index
        }ms">${letter}</span>`;
      })
      .join("");
  }, []);

  const activate = () => {
    inputRef.current.focus();
  };

  // Second argument is a function which contains all the data which we will be able to use from outside.

  useImperativeHandle(ref, () => {
    return {
      activate: activate,
    };
  });

  return (
    <div
      className={`${classes["form-control"]} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={inputRef}
        required
      />
      <label ref={inputLabelRef} htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
});

export default Input;
