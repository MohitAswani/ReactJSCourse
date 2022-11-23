import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  // To define state in class based components we use the constructor which is automatically called when component is called.
  constructor() {
    // call the constructor of the parent class
    super();

    // With class based components state is always an object.

    // We have to group all the states in an object.
    this.state = {
      showUsers: true,
    };
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users provided!");
    }
  }

  // Standard way of defining a method in class
  toggleUsersHandler() {
    // To change the state

    // We use the inbuilt set state class provided by the component class to change the state.

    // React will merge the object we pass in setState with the old state.

    // setState also supports taking in a function, hence we can pass in a function to setState and use that to change its value.
    this.setState((curState) => {
      return {
        showUsers: !curState.showUsers,
      };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    // To attack the method defined in our class to an event we need to pass it using this.method_name.

    // The issue with this is that the this keyword won't refer to the class but to the element upon which its called.

    // So we need to bind this method to the class 'this'.

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
