import { DateFormActions } from './DateForm.d';
import { DateType } from '../types/DateType';


export interface IGraphTextFieldProps {
    inputValue: number;
    inputAction: DateFormActions;
    inputType: DateType;
    dateType: DateType;
    isEnd: boolean;
  }