import { Dinero } from "dinero.js";

export const SWITCH_CURRENCY = "SWITCH_CURRENCY";

export const SET_FROM_CURRENCY_SUCCESS = "SET_FROM_CURRENCY_SUCCES";

export const SET_TO_CURRENCY_SUCCESS = "SET_TO_CURRENCY_SUCCESS";

export const FORM_ERROR = "FORM_ERROR";

export interface ISetToCurrencyAction {
  type: typeof SET_TO_CURRENCY_SUCCESS;
  payload: Dinero;
}
export interface ISetFromCurrencyAction {
  type: typeof SET_FROM_CURRENCY_SUCCESS;
  payload: Dinero;
}
export interface ISwitchCurrencyAction {
  type: typeof SWITCH_CURRENCY;
}
export interface IFormError {
  type: typeof FORM_ERROR;
  payload: any;
}
export type IFormActionTypes =
  | ISetFromCurrencyAction
  | ISetToCurrencyAction
  | ISwitchCurrencyAction
  | IFormError;
