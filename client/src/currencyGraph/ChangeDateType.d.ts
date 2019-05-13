import { DateType } from './../types/DateType.d';
import { setDateType } from './../store/currencyGraph/actions';


export interface IChangeDateTypeProps {
    dateType: DateType;
    setDateType: typeof setDateType;
  }