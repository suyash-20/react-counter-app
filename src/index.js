import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";
import { createStore } from "redux";
import counterReducer from "./reducers/counter";
import { Provider } from "react-redux";

const myStore = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <Counters />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
