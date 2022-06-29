import React from "react";

// import styled from "styled-components";

// For using css modules we change the import a little bit.
import styles from './Button.module.css';

// Also for using CSS modules we need to change the className. We use styles which is an object which contains every class we defined in the css file as a property.

// This will apply the button class in a special way to this component.
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

// This is called attacked template literal, it is a default js feature and not specific to this package or to react.

// button is simply as method on the stlyed object, it a special method and hence we add `` after it. And what we pass in `` will be passed into the method.

// And this button method will return a new button component and this styled method has a button for each html element.

// Button with styles we provide between the backticks.

// Also since there is no way to add classnames we just simply add the styles without selectors.

// And for pseudo-selectors we add the &symbol. Which tells the package that we want a special pseudo selector for this component which is created here.

// Also react will automatically add the onClick and type and children props from the parent. Also it will automatically assign a unique className to the button.

// const Button = styled.button`
//   width:100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }

//   @media (min-width: 768px){
//     width:auto;
//   }
// `;

export default Button;
