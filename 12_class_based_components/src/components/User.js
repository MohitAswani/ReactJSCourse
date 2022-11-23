import { Component } from "react";

import classes from "./User.module.css";

// User class extends from component class
class User extends Component {

  // For initialization work
  // constructor() {
  //   super();

  // }

  componentWillUnmount(){
    console.log('User will unmount');
  }

  // Because the component extends from the component class, it can access the props using this keyword.

  // Class based components work with functional components.

  // For returning JSX called by react
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
