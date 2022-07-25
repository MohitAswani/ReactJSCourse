# Behind the scenes of react :

* React is a JavaScript library which only cares about the components and it doesn't care about the DOM and what the components are made up of.

* React DOM is a library which cares about the DOM and it's components.

* React mainly cares about props, state and context. And whenever these three change components which are dependent on them are updated and if these components are supposed to bring something new to the screen then react lets the react-dom know about these dom changes.

* ![](2022-07-25-17-03-44.png)

* React uses a concept called virtual dom which determines how the component tree which our app builds in the end looks like and what it should like after state update.

* And that information is handed to reactDOM to manipulate the react dom.

* ![](2022-07-25-17-05-24.png)

* ![](2022-07-25-17-07-06.png)

* While re-rendering the component react only manipulates the part which is different from the previous snapshot.

* ![](2022-07-25-17-09-36.png)