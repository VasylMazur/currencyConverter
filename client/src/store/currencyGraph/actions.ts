import { DateType, IGraphCurrency } from "../initialState.d";

import {
  CLEAR_GRAPH_CURRENCIES,
  GET_GRAPH_CURRENCIES_SUCCESS,
  GRAPH_ERROR,
  IClearGraphCurrencies,
  IGetGraphCurrenciesSuccess,
  IGraphError,
  ISetDateType,
  ISetFromDate,
  ISetToDate,
  SET_DATE_TYPE,
  SET_FROM_DATE,
  SET_TO_DATE
} from "./actions.d";

export const graphError = (payload: any): IGraphError => {
  return { type: GRAPH_ERROR, payload };
};
export const clearGraphCurrencies = (): IClearGraphCurrencies => {
  return {
    type: CLEAR_GRAPH_CURRENCIES
  };
};
export const getGraphCurrenciesSuccess = (
  payload: IGraphCurrency
): IGetGraphCurrenciesSuccess => {
  return {
    payload,
    type: GET_GRAPH_CURRENCIES_SUCCESS
  };
};
export const setDateType = (payload: DateType): ISetDateType => {
  return {
    payload,
    type: SET_DATE_TYPE
  };
};
export const setFromDate = (payload: number): ISetFromDate => {
  return {
    payload,
    type: SET_FROM_DATE
  };
};
export const setToDate = (payload: number): ISetToDate => {
  return {
    payload,
    type: SET_TO_DATE
  };
};
