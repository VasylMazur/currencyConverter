import { setFromCurrencySuccess, setToCurrencySuccess, switchCurrency } from './../store/currencyForm/actions';
import  Dinero  from 'dinero.js';
export interface ICurrencyFormProps {
    fromCurrency: Dinero.Dinero;
    toCurrency: Dinero.Dinero;
    convertThunk: Function;
    setFromCurrencySuccess: typeof setFromCurrencySuccess;
    setToCurrencySuccess: typeof setToCurrencySuccess;
    switchCurrency: typeof switchCurrency;
  }