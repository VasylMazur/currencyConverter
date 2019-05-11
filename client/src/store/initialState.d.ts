import { Dinero } from "dinero.js";
export enum DateType {
  YEAR,
  MONTH,
  DAY
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
  fromDate: number;
  toDate: number;
  currencies: IGraphCurrency[];
}
export interface IAppState {
  formState: IFormState;
  graphState: IGraphState;
}
