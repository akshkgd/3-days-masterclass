// Certainly! Here's a simple example of using Redux in a React application:

// 1. Install the required packages:
//    ```bash
//    npm install redux react-redux
//    ```

// 2. Create a Redux store:
//    ```jsx
   // store.js
   import { createStore } from 'redux';

   // Initial state
   const initialState = {
     count: 0,
   };

   // Reducer function
   const reducer = (state = initialState, action) => {
     switch (action.type) {
       case 'INCREMENT':
         return {
           ...state,
           count: state.count + 1,
         };
       case 'DECREMENT':
         return {
           ...state,
           count: state.count - 1,
         };
       default:
         return state;
     }
   };

   // Create the store
   const store = createStore(reducer);

   export default store;


// 3. Create a React component that uses Redux:
//    ```jsx
   // Counter.js
   import React from 'react';
   import { useSelector, useDispatch } from 'react-redux';

   const Counter = () => {
     const count = useSelector((state) => state.count);
     const dispatch = useDispatch();

     const increment = () => {
       dispatch({ type: 'INCREMENT' });
     };

     const decrement = () => {
       dispatch({ type: 'DECREMENT' });
     };

     return (
       <div>
         <h1>Counter</h1>
         <p>Count: {count}</p>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
       </div>
     );
   };

   export default Counter;
//    ```

// 4. Use the Redux store in your main app component:
//    ```jsx
   // App.js
   import React from 'react';
   import { Provider } from 'react-redux';
   import store from './store';
   import Counter from './Counter';

   const App = () => {
     return (
       <Provider store={store}>
         <div className="App">
           <Counter />
         </div>
       </Provider>
     );
   };

   export default App;
//    ```

// In this example:

// - The `store.js` file defines the Redux store, initial state, and a reducer function. The reducer handles different actions and updates the state accordingly.
// - The `Counter.js` component uses the `useSelector` and `useDispatch` hooks from `react-redux` to access the state and dispatch actions, respectively.
// - The `Counter` component renders the current count from the Redux store and provides buttons to increment and decrement the count.
// - The `App.js` component wraps the `Counter` component with the `Provider` component from `react-redux` to make the Redux store available to all components within its hierarchy.

// Remember to import and use the `Provider` component from `react-redux` to provide access to the Redux store. Additionally, you can create multiple components that connect to the store and access the state or dispatch actions as needed.

// This is a basic example of using Redux in a React application. You can expand on this foundation to manage more complex state and actions within your application.



// custom hook

import { useState } from 'react';

export function useAddNumbers() {
  const [result, setResult] = useState(null);

  const addNumbers = (num1, num2) => {
    const sum = num1 + num2;
    setResult(sum);
  };

  return { result, addNumbers };
}


// final
import { useState } from 'react';

export function useAddNumbers() {
  const [result, setResult] = useState(null);

  const addNumbers = (num1, num2) => {
    const sum = num1 + num2;
    setResult(sum);
  };

  return { result, addNumbers };
}

// app.js

import { useAddNumbers } from './useAddNumbers';
import './App.css';

function App() {
  const { result, addNumbers } = useAddNumbers();

  const handleAddition = () => {
    addNumbers(5, 3);};
    return(
    <div>
      <div>
      <h1>Custom Hook Example</h1>
      <button onClick={handleAddition}>Add Numbers</button>
      <p>Result: {result}</p>
    </div>
    </div>
    )

}

export default App;