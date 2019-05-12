import { DateFormActions } from './DateForm.d';
import { DateType } from '../store/initialState.d';

export interface IGraphTextFieldProps {
    inputValue: number;
    inputAction: DateFormActions;
    inputType: DateType;
    dateType: DateType;
    isEnd: boolean;
  }