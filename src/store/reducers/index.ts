import { combineReducers } from "redux";
//Reducers
import appReducer from "./app.reducer";

/**
 * Combine Reducers
 */
const combinedReducers = combineReducers({
  appReducer,
});

export default combinedReducers;
