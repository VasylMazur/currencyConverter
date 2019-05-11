import { DateType, IGraphCurrency } from "../initialState.d";

export const GRAPH_ERROR = "GRAPH_ERROR";

export const GET_GRAPH_CURRENCIES_SUCCESS = "GET_GRAPH_CURRENCIES_SUCCESS";

export const CLEAR_GRAPH_CURRENCIES = "CLEAR_GRAPH_CURRENCIES";

export const SET_DATE_TYPE = "SET_DATE_TYPE";

export const SET_FROM_DATE = "SET_FROM_DATE";

export const SET_TO_DATE = "SET_TO_DATE";

export interface IClearGraphCurrencies {
  type: typeof CLEAR_GRAPH_CURRENCIES;
}
export interface IGraphError {
  type: typeof GRAPH_ERROR;
  payload: any;
}
export interface IGetGraphCurrenciesSuccess {
  type: typeof GET_GRAPH_CURRENCIES_SUCCESS;
  payload: IGraphCurrency;
}
export interface ISetDateType {
  type: typeof SET_DATE_TYPE;
  payload: DateType;
}
export interface ISetFromDate {
  type: typeof SET_FROM_DATE;
  payload: number;
}
export interface ISetToDate {
  type: typeof SET_TO_DATE;
  payload: number;
}
export type GraphActionTypes =
  | IClearGraphCurrencies
  | IGraphError
  | IGetGraphCurrenciesSuccess
  | ISetDateType
  | ISetFromDate
  | ISetToDate;
