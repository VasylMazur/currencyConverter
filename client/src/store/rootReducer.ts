import { combineReducers } from "redux";

import { currencyFormReducer } from "./currencyForm/currencyFormReducer";
import { currencyGraphReducer } from "./currencyGraph/currencyGraphReducer";
export const rootReducer = combineReducers({
  formState: currencyFormReducer,
  graphState: currencyGraphReducer
});
