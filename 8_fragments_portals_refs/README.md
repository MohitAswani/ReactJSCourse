# Fragment, portals and refs:

## JSX Limitation:

- If we have two adjacent JSX root level elements we get an error.

- ![](2022-07-05-17-12-26.png)

- The reason is that our JSX code get transformed to createElement function and only one function call can be returned.

- ![](2022-07-05-17-14-37.png)

- Another solution is return an array of JSX elements. But we will need to provide a unique key to each element of the array as whenever we work with array react wants a key. ![](2022-07-05-17-18-05.png)

- But we usually dont do that and we usually just wrap it in a div.

- But we might run into another problem of too many unnecessary divs which are only there because of this requirement or this limitation of JSX.

- ![](2022-07-05-17-20-25.png)

- And we usually try to avoid rendering uneccessory elements.

- To overcome this we can use wrapper component which does nothing but just return the code written between it. So its an empty element who only function is to overcome this requirement.

- In the wrapper component we return the adjacent components and we wont get an error becuase we are returning it only through the wrapper component.

- Wrapper component won't render any real content.

- ![](2022-07-05-17-27-31.png)


## Fragment :

* Since this approach is so obvious hence its included in react through fragments.

* ![](2022-07-05-17-29-01.png)

* The left syntax will always work but the one on the right depends on our project configuration to work properly.

* If the `<></>` doesn't work we use `<Fragment>`

## React portals :

* Helps us write cleaner code.

* ![](2022-07-05-17-33-11.png)

* The above way of writing code is not wrong but it not good code. And can lead to real problems because of styling and element access.

* And in the above code our modal is deeply structured in our HTML code so its not obvious that this modal should be overlay to other html content.

* We have similiar problem for other overlays like side-drawer, pop-up, modal etc.

* ![](2022-07-05-17-37-21.png)

* We can use a portal to write the component as we want to so that we have no friction when we want to pass data arround and so on. But to render modal differently in real dom and to render modal HTML somewhere else than it would normally go to.

* ![](2022-07-05-17-38-57.png)

* And we can achieve this with react portals.

* Portals need two thing a place where we want to port the component to and to let the component know to port to that place.

* To do that we create two extra roots next to root in our index.html.

* Then we seperate our overlay and backdrop elements into seperate components.

* Check the error modal to see the implementation.

* We use react-dom here which is library which brings all the react features to dom.

* On react dom we call the createPortal method which takes two arguments.

* First the react node which should be rendered in jsx code which allows us to access and use props to forward function.

* Second argument to createPortal is a pointer to the container in the real DOM where this element should be rendered in. And we use dom api to access the element.

* With fragments and portal we end up with semantically cleaner code.

# Ref :

* Refs are actually quite powerful but in their most basic form they allow us to get access to other DOM elements and work with them.

* Updating the state with every keystroke when we only need them when we submit the form is redundant.

* And that's a scenario where ref's could help us but they are not limited to that.

* With ref's we can setup a connection between a HTML element and our other js code.

* We import useRef and call in inside our react component like other react hooks.

* useRef takes a default value which we want to initialize it to and it returns a value which allows us to work with that ref later, which allows us to work with that element which we are going to connect it to.

* To connect a element to a ref we add it to the ref prop and we can connect any HTML element to a ref. 

* And react will store the native DOM element in the ref when it first renders the component.

* If we console the ref we see an object with a current prop holds the actual value that ref is connected to. 
  
* And it contains the actual DOM node. And it is suggested to not manipulate that dom node but we can read always read it.

* Which means we can access the value without listening to every keystroke and without states.

* To reset the value we do something which we should rarely do which is we manipulate the dom using refs.

* We should rarely do this but in this case we are not actually changing the dom by adding a element but we are just changing the value of an input.

* For only reading values , we can use ref's. But for manipulation we should use states.

* Also when we use refs for elements then those elements are uncontrolled elements. Because we are not controlling the states of these input elements by react and we are using a react feature to reference but we do not feed the value back to the component and we just do dom manipulation to set the new value.

