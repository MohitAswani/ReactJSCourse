import { Fragment, Component } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();

    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  // We dont need an if check becuase this will run only once when the component mounts.
  componentDidMount() {
    // Sending http request ....
    this.setState({
      filteredUsers: this.context.users,
    });
  }

  // Will be called when the component is re-evaluated becuase the state changes

  // If we do it simply it would create an infinite loop because this function will change the state which will again call this method.

  // So we check if the searchTerm changed using the prevState.
  componentDidUpdate(prevProps, prevState) {
    // Only update if the search term changes.
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  // With use context, you can listen to multiple context in one of the same component by calling use context multiple times and pointing at different contexts.

  // This will not be possible with class based components, because there you can only connect a class based component to one context.

  // And you do that by adding a static property, by adding the static keyword here and then adding the property named context type written like this. And then you assign a value of users context here.

  // With that you're telling React hey this component should have access to the user's context context, but you can only set the static context type property once so if there are two contexts which should be connected to one at the same component, this would simply not be an option.

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>

        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>

//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
