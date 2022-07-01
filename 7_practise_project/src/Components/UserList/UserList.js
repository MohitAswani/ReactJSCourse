import React from "react";

import UserItem from "../UserItem/UserItem";
import Card from "../UI/Card";

import styles from "./UserList.module.css";

const UserList = (props) => {

  const content=props.users.map(u=>{
    return <UserItem key={u.id} userName={u.name} userAge={u.age} />
  });

  return (
    <Card>
      <ul className={`${styles["user-list"]}`}>
        {content}
      </ul>
    </Card>
  );
};

export default UserList;
