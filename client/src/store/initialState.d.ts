import { Dinero } from "dinero.js";
export enum DateType {
  YEAR = "year",
  MONTH = "month",
  DAY = "day"
}
export interface IGraphDate {
  day: number;
  month: number;
  year: number;
}
export interface IGraphCurrency { amount: number; date: number }
export interface IFormState {
  fromCurrency: Dinero;
  toCurrency: Dinero;
  errors: any[];
}
export interface IGraphState {
  dateType: DateType;
  errors: any[];
  fromDate: IGraphDate;
  toDate: IGraphDate;
  currencies: IGraphCurrency[];
}
export interface IAppState {
  formState: IFormState;
  graphState: IGraphState;
}
