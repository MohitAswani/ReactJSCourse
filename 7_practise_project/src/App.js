import React, { useState } from "react";

import "./App.css";

import UserInputForm from "./Components/UserInput/UserInputForm";
import UserList from "./Components/UserList/UserList";
import ErrorModal from "./Components/ErrorModal/ErrorModal";

function App() {
  const DUMMY_USERS = [
    {
      id: 1,
      name: "Mohit Aswani",
      age: "19",
    },
    {
      id: 2,
      name: "Rohit Aswani",
      age: "21",
    },
  ];

  const [users, setUsers] = useState(DUMMY_USERS);
  const [showModal,setShowModal] = useState(false);
  const [errorMessage,setErrorMessage]=useState("");

  const showErrorModal=(errorMessage)=>{
    setShowModal(true);
    setErrorMessage(errorMessage);
  };

  const hideErrorModal=()=>{
    setShowModal(false);
  }

  const addNewUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      newUser.id=prevUsers.length+1;
      return [newUser, ...prevUsers];
    });
  };

  return (
    <div className="App">
      <section className="user-from">
        <UserInputForm addNewUser={addNewUserHandler} showErrorModal={showErrorModal} />
      </section>
      <section className="users">
        <UserList users={users} />
      </section>
      <section className="error-modal">
        <ErrorModal show={showModal} errorMessage={errorMessage} hideErrorModal={hideErrorModal}/>
      </section>
    </div>
  );
}

export default App;
