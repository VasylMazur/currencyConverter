import { IGraphDate } from './../types/IGraphDate.d';
import { DateType } from './../types/DateType.d';

export interface IGraphInformationProps {
    dateType: DateType;
    fromCurrency: string;
    toCurrency: string;
    fromDate: IGraphDate;
    toDate: IGraphDate;
  }