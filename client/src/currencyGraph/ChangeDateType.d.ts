import { setDateType } from './../store/currencyGraph/actions';
import { DateType } from './../store/initialState.d';

export interface IChangeDateTypeProps {
    dateType: DateType;
    setDateType: typeof setDateType;
  }