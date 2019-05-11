import Dinero from "dinero.js";
import { DateType, IAppState } from "./initialState.d";

export const initialState: IAppState = {
  formState: {
    errors: [],
    fromCurrency: Dinero({ amount: 0, currency: "EUR" }),
    toCurrency: Dinero({ amount: 0, currency: "PHP" })
  },
  graphState: {
    currencies: [],
    dateType: DateType.YEAR,
    errors: [],
    fromDate: 2015,
    toDate: 2019
  }
};
