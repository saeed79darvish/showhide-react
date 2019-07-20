import { combineReducers } from "redux";
import { testReducer } from "./testReducer";

const appReducer = combineReducers({
  data: testReducer
});

export default appReducer;
