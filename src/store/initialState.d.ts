import { Dinero } from "dinero.js";



export interface IFormState {
  fromCurrency: Dinero;
  toCurrency: Dinero;
  errors: any[];
}
export interface IGraphState {
  fromCurrencyName: string;
  toCurrencyName: string;
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
