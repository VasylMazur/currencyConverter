import Dinero from "dinero.js";
import { IAppState } from "./initialState.d";

export const initialState: IAppState = {
  formState: {
    errors: [],
    fromCurrency: Dinero({ amount: 0, currency: "EUR" }),
    toCurrency: Dinero({ amount: 0, currency: "PHP" })
  }
};
