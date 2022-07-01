import React from "react";

import styles from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <li className={`${styles["user-item"]}`}>
      {props.userName} ({props.userAge} years old)
    </li>
  );
};

export default UserItem;
