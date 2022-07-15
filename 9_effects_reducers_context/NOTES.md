# Effects, reducers and context :

## Effect / Side-effect:

* ![](2022-07-15-09-25-57.png)

* Side effect includes all the code which is not directly involved in rendering something on the screen.

* And we should not place this code in our component function since component function reevaulates every time there is a change in the state.

* For example if we wanted to send a HTTP request and if we were to send it in the component function then we would send the request whenever the function reevaulates.

* And if we were to change a state in response to our HTTP request then we would create an infinite loop.

* Therefore such side effects should not be placed in the component function since that would most likely create bugs, infinite loops or simply send too many HTTP requests.

* And we have a better tool for handling side-effects.

* ![](2022-07-15-09-31-28.png)

* We use useEffect to handle side-effects.

* useEffect takes in a function and some dependencies. And it will only run the function if the dependencies have changed.

* ![](2022-07-15-13-44-37.png)

* A useEffect hook with no dependencies (not even an empty array) will run every time the component reevaulates.

* But a useEffect hook with an empty array will only run the first time the component renders.

## Notes for the Login component's useEffect hook :

* Since we are using setFormIsValid , enteredEmail and enteredPassword in this function hence we should pass all these things as dependencies.

* And this effect function will be evaluated when one of the dependencies changes.

* Also since the state updated function are ensured by react to never change we do not need to pass then in useEffect.

* So we use useEffect to run some code when some data changes.

* So useEffect is hook which is used to execute code in response to something and that something could be the component being loaded, email address being updated or any action which happens in response to another action then that is a side effect.

* The above is being called on every keystroke in cases when we are making HTTP request that might lead a lot of unecessary trafic and hence we only want to check the input only when the user pauses.

* That is technique which is called debouncing , we want to debounce the input and to make sure that we are not doing something on every keystroke but once the user pauses.

* So for this we use a timer and call the setTimeout function. But we do not call it everytime.

* We save this timeout function and if this function is called again before the previous timeout executes we cancel the previous time out and create a new one.

* Implement our logic we will return something from the useEffect function and we can only return a function from the useEffect hook.

* And this function is known as a cleanup function and this function will run a cleanup process before useEffect runs next time (so not for the first time this function runs) and also before the component is removed.

* So we clear the clearTimeout function in the cleanup code.

* So using debouncing we reduce the number of times the useEffect function runs.

* A useEffect hook with no dependencies (not even an empty array) will run every time the component reevaulates.

* But a useEffect hook with an empty array will only run the first time the component renders.

* If we set no dependencies in useEffect the function inside it will be called every time the code runs.

* Equivalent to putting it just in the component function.

## useReducer:

* Hook which helps us to manage the state of our application.

* ![](2022-07-15-14-13-18.png)

* ![](2022-07-15-14-32-23.png)

* Another problem with updating the state in this way is that we are updating the state using another state and we should not do this because react schedules state updates and our state might me outdate by the time we use it.

* NEVER UPDATE A STATE USING ANOTHER STATE.

* So we use useReducer to manage the state and combine the multiple states into one state.

* ![](2022-07-15-14-39-45.png)

* In use useReducer we use the dispatch function to update the state but not directly. We use the dispatch function to call the reducer function which get the previous state and the action and returns the new state.


