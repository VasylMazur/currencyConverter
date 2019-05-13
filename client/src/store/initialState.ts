import Dinero from "dinero.js";
import { DateType } from "../types/DateType.d";
import { IAppState } from "./initialState.d";

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
    fromDate: {
      day: 1,
      month: 1,
      year: 2015
    },
    toDate: {
      day: 1,
      month: 1,
      year: 2019
    }
  }
};
