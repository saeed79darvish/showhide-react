import React from "react";
import "./App.css";
import ShowHide from "./components/ShowHide";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>ShowHide</h1>
        <ShowHide />
      </div>
    </Provider>
  );
}

export default App;
