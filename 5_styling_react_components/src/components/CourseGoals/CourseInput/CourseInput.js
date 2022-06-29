import React, { useState } from "react";
// import styled from "styled-components";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// So we also use the & symbol for nested selectors.

// We can have multiple styled components in a single file and then use them as normal components in jsx syntax.

// The good thing is that styled components forward all the props we set on them to the underlying components. Hence we can use this to dynamically set the classNames.

// So we can either set the classNames dynamically or use another feature provided by styled components which is that we can add props to our components and utelize those props where we set the styles.

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props=>(props.invalid?'red':'black')};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props=>(props.invalid?'red':'#ccc')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     background: ${props=>(props.invalid?'#ffd7d7':'transparent')};
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // In the below jsw code we are dynamically setting the css property using a state.

  // Better options is to set the className dynamically and we do that by using the {} braces.

  // We set the dynamic class using ``. And we can repeat the same thing using multiple classes.

  // // STYLES COMPONENT FOR FORM
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     {/* <FormControl className={`${!isValid ? "invalid" : ""}`}> */}
  //     <FormControl invalid={!isValid}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  // For accessing the properties with - we can use [] syntax for properties.

  // To add dynamic classes we add back ticks ``.

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${(!isValid)?styles.invalid:''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
