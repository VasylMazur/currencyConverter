import { DateType, IGraphCurrency } from "../initialState.d";

export const GRAPH_ERROR = "GRAPH_ERROR";

export const GET_GRAPH_CURRENCIES_SUCCESS = "GET_GRAPH_CURRENCIES_SUCCESS";

export const CLEAR_GRAPH_CURRENCIES = "CLEAR_GRAPH_CURRENCIES";

export const SET_DATE_TYPE = "SET_DATE_TYPE";

export const SET_FROM_DATE_YEAR = "SET_FROM_DATE_YEAR";

export const SET_FROM_DATE_MONTH = "SET_FROM_DATE_YEAR_MONTH";

export const SET_FROM_DATE_DAY = "SET_FROM_DATE_DAY"

export const SET_TO_DATE_YEAR = "SET_TO_DATE_YEAR";

export const SET_TO_DATE_MONTH = "SET_TO_DATE_MONTH";

export const SET_TO_DATE_DAY = "SET_TO_DATE_DAY";

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
export interface ISetFromDateYear {
  type: typeof SET_FROM_DATE_YEAR;
  payload: number;
}
export interface ISetFromDateMonth {
  type: typeof SET_FROM_DATE_MONTH;
  payload: number;
}
export interface ISetFromDateDay {
  type: typeof SET_FROM_DATE_DAY;
  payload: number;
}
export interface ISetToDateYear {
  type: typeof SET_TO_DATE_YEAR;
  payload: number;
}
export interface ISetToDateMonth {
  type: typeof SET_TO_DATE_MONTH;
  payload: number;
}
export interface ISetToDateDay {
  type: typeof SET_TO_DATE_DAY;
  payload: number;
}
export type GraphActionTypes =
  | IGetGraphCurrenciesSuccess
  | IClearGraphCurrencies
  | IGraphError
  | ISetDateType
  | ISetFromDateYear
  | ISetFromDateMonth
  | ISetFromDateDay
  | ISetToDateYear
  | ISetToDateMonth
  | ISetToDateDay;
