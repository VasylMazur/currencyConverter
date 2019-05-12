import Dinero from "dinero.js";
import { initialState } from "../initialState";
import { IFormState } from "../initialState.d";
import {
  FORM_ERROR,
  IFormActionTypes,
  SET_FROM_CURRENCY_SUCCESS,
  SET_TO_CURRENCY_SUCCESS,
  SWITCH_CURRENCY
} from "./actions.d";

export const currencyFormReducer = (
  state: IFormState = initialState.formState,
  action: IFormActionTypes
) => {
  switch (action.type) {
    case SET_FROM_CURRENCY_SUCCESS:
      return { ...state, fromCurrency: action.payload };
    case SET_TO_CURRENCY_SUCCESS:
      return { ...state, toCurrency: action.payload };
    case SWITCH_CURRENCY: {
      const { fromCurrency, toCurrency } = state;
      const toCurrencyName = toCurrency.getCurrency();
      const toCurrencyAmount = Math.floor(toCurrency.getAmount() / 100);
      const fromCurrencyName = fromCurrency.getCurrency();
      const fromCurrencyAmount = fromCurrency.getAmount() * 100;
      return {
        ...state,
        fromCurrency: Dinero({
          amount: toCurrencyAmount,
          currency: toCurrencyName
        }),
        toCurrency: Dinero({
          amount: fromCurrencyAmount,
          currency: fromCurrencyName
        })
      };
    }
    case FORM_ERROR: {
      return { ...state, errors: [...state.errors, action.payload] };
    }
    default: {
      return state;
    }
  }
};
