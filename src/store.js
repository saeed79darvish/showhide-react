import { createStore } from "redux";

import appReducer from "./showHide/appReducer";

const store = createStore(appReducer);

export default store;
