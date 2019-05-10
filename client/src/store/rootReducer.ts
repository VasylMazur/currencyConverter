import { combineReducers } from "redux";

import { currencyFormReducer } from "./currencyForm/currencyFormReducer";
export const rootReducer = combineReducers({
  formState: currencyFormReducer
});
