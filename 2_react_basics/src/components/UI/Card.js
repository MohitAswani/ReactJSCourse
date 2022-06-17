import "./Card.css";

// We can sometimes have some component which act as a shell around other components .

// But out of the box we can't use our custom components like wrappers arround other content.

// To allow it to act like a wrapper we use a special built in prop in react which every component receives. It is the children prop.

// Children is a reserved name and we can't set children prop on a component.

// Value of this children prop will be the content between the opening and closing tags of our custom components.

// Every default HTML element supports className and other default attributes but our custom components support only what we tell them to support.

// So make the className attribute support className we need to add all those class names to our cards className.
const Card = (props) => {
  // Anything we receive as a constant to the className attribute is added to this classes constant.

  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};
export default Card;
