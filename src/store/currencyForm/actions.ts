import Dinero from "dinero.js";

import {
  FORM_ERROR,
  IFormError,
  ISetFromCurrencyAction,
  ISetToCurrencyAction,
  ISwitchCurrencyAction,
  SET_FROM_CURRENCY_SUCCESS,
  SET_TO_CURRENCY_SUCCESS,
  SWITCH_CURRENCY
} from "./actions.d";

export const switchCurrency = (): ISwitchCurrencyAction => ({
  type: SWITCH_CURRENCY
});

export const setFromCurrencySuccess = (
  payload: Dinero.Dinero
): ISetFromCurrencyAction => {
  return {
    payload,
    type: SET_FROM_CURRENCY_SUCCESS
  };
};

export const setToCurrencySuccess = (
  payload: Dinero.Dinero
): ISetToCurrencyAction => {
  return {
    payload,
    type: SET_TO_CURRENCY_SUCCESS
  };
};
export const formError = (payload: any): IFormError => {
  return {
    payload,
    type: FORM_ERROR
  };
};
