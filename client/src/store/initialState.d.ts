import { Dinero } from "dinero.js";



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
