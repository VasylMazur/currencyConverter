import { DateType, IGraphCurrency } from "../initialState.d";

import {
  CLEAR_GRAPH_CURRENCIES,
  GET_GRAPH_CURRENCIES_SUCCESS,
  GRAPH_ERROR,
  IClearGraphCurrencies,
  IGetGraphCurrenciesSuccess,
  IGraphError,
  ISetDateType,
  ISetFromDateMonth,
  ISetFromDateYear,
  ISetToDateDay,
  ISetToDateMonth,
  ISetToDateYear,
  SET_DATE_TYPE,
  SET_FROM_DATE_MONTH,
  SET_FROM_DATE_YEAR,
  SET_TO_DATE_DAY,
  SET_TO_DATE_MONTH,
  SET_TO_DATE_YEAR,
  ISetFromDateDay,
  SET_FROM_DATE_DAY,
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
export const setFromDateYear = (payload: number): ISetFromDateYear => {
  return {
    payload,
    type: SET_FROM_DATE_YEAR
  };
};
export const setFromDateMonth = (payload: number): ISetFromDateMonth => {
  return {
    payload,
    type: SET_FROM_DATE_MONTH
  };
};
export const setFromDateDay = (payload: number): ISetFromDateDay => {
  return {
    payload,
    type: SET_FROM_DATE_DAY
  };
};
export const setToDateYear = (payload: number): ISetToDateYear => {
  return {
    payload,
    type: SET_TO_DATE_YEAR
  };
};
export const setToDateMonth = (payload: number): ISetToDateMonth => {
  return {
    payload,
    type: SET_TO_DATE_MONTH
  };
};
export const setToDateDay =  (payload: number): ISetToDateDay => {
  return {
    payload,
    type: SET_TO_DATE_DAY
  };
};
