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