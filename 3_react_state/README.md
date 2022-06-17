# React state : 

* Working of components in react : The components we define in react are nothing but functions and these function are called by react when it encounters them in the jsx code and react keeps on calling these function until there are no more functions left. And after it executes these function it draws whatever it found from the function calls on the screen.

* In react to add an event listener , instead of taking the imperative approach like in vanilla js we add an event listener by going to the JSX element and there we add a special prop. And this prop won't set a value for the element and it start with on.


* The problem with this is that it never repeats that and react only goes through this process when the application is initially rendered and thereafter it done.

* So we need a way of telling react that something changed and a certain component needs to be revaluated. And thats where react introduces state.

* To tell react to revaluated a component we import useState which is a function provided by the react library which allows us to define values as states and where changes to these values should reflect in the component function being called again.

* Then we simply call the useState in the component.

* This function is a react hook and there are other hooks as well.

* All the react hooks can be recognized by the use prefix and all these hooks must be called inside of the component function and outside of any nested functions.

* useState takes a default state value because with use State we create a special kind of variable, a variable where changes will lead to this component function being called again.

* And this function gives us the access to this special variable. However it does not just return that it also returns a function which we can then call to assign a new value to that variable.

* And hence useState actually returns an array where the first value is the variable itself and second element is the updating function. And we can use array destructuring to store those elements.

* And we can give them any name since in array destructuring only the order matters.

* UseState registers some state so some value as a state for the component instance for which it is being called.

* So it will only revalutate the component which the update function is being executed.

* We update the value by calling the updating function returned by the useState hook.

* We set the new value like becuause this function not only assigns a new value to this variable but that it is a special variable and it is managed by react somewhere in memory and when we call this updating function , the special variable receives a new value and the component function in which we called and initialized the state will be executed again.

* And then react draws any new changes to the screen.

* Also calling this state update function won't update the value right away rather it schedules the update.

* So if we have a data which changes and for which we want to update the web page then we use state becuase a regular variable won't work.

* Also when the state is updated the component for which it is updated is revaluated and drawn on the screen. But the useState function won't be initialized again for that component and hence it will only return the value of state which we updated to and now that original value which was assigned initially.