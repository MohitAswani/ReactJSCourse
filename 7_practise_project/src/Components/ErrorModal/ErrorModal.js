import React from "react";

import Button from "../UI/Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-header"]}>
          <h4 className={styles["modal-title"]}>Invalid input</h4>
        </div>
        <div className={styles["modal-body"]}>{props.errorMessage}</div>
        <div className={styles["modal-footer"]}>
          <Button onClick={props.hideErrorModal}>Okay</Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
