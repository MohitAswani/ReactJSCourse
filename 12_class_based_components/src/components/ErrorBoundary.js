import { Component } from "react";

// It is a class-based component which implements the componentDidCatch lifecycle method.

// The componentDidCatch lifecycle method can be added to any class-based component, and whenever you do add it to a class-based component, it makes that class-based component an error boundary.

// Error boundary is just a term which is used to refer to components which have this method.

// Also there is no function component equivalent and if we want to build an error boundary it is a class based component.

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  // This lifecycle method will be triggered whenever one of the child components throws an error or generates an error.

  // Here we return this.props.children because we want to wrap our error boundary component around components which should be protected by that component.

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
