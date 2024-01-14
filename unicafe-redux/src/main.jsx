import React from "react";
import ReactDOM from "react-dom/client";

import { createStore } from "redux"; // import createStore method from redux
import reducer from "./reducer"; // import the reducer

// create the store with a reducer,
// the reducer gives to the store the state and the logic to change the state based on a type
const store = createStore(reducer);

const App = () => {
  // create functions to change the state
  const good = () => {
    store.dispatch({ type: "GOOD" }); // dispatch sends an action to the store
  };

  const ok = () => {
    store.dispatch({ type: "OK" });
  };

  const bad = () => {
    store.dispatch({ type: "BAD" });
  };

  const zero = () => {
    store.dispatch({ type: "ZERO" });
  };

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad</button>
      <button onClick={zero}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(<App />);
};

renderApp(); // render to the app
store.subscribe(renderApp); // show the actions sent to the store
