import { DateType, IGraphDate } from './../store/initialState.d';
export interface IGraphInformationProps {
    dateType: DateType;
    fromCurrency: string;
    toCurrency: string;
    fromDate: IGraphDate;
    toDate: IGraphDate;
  }