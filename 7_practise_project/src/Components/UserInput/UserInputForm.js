import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from "./UserInputForm.module.css";

const UserInputForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(inputName.trim().length===0||inputAge.trim().length===0)
    {
      props.showErrorModal('Please enter a valid name and age(non-empty values)');
      return ;
    }

    if(inputAge.parseInt()>0)
    {
      props.showErrorModal('Please enter a valid age(>0)');
      return ;
    }

    const newUser = {
      name: inputName,
      age: +inputAge,
    };

    props.addNewUser(newUser);

    setInputName("");
    setInputAge("");
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler} className={`${styles["form-control"]}`}>
        <label>Username</label>
        <input type="text" onChange={nameChangeHandler} value={inputName} />
        <label>Age(Years)</label>
        <input type="number" onChange={ageChangeHandler} value={inputAge} />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default UserInputForm;
