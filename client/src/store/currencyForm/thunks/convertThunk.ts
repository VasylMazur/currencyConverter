import { AnyAction, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IAppState } from "../../initialState.d";
import { formError, setToCurrencySuccess } from "../actions";

export const convertThunk = (
  dineroToConvert: Dinero.Dinero,
  convertCurrency: string
): ThunkAction<void, IAppState, null, AnyAction> => {
  alert("masal");
  return dispatch => {
    dineroToConvert
      .convert(convertCurrency, {
        endpoint: "https://api.exchangeratesapi.io/latest?base={{from}}",
        propertyPath: "rates.{{to}}"
      })
      .then(convertedDinero => dispatch(setToCurrencySuccess(convertedDinero)))
      .catch(error => dispatch(formError(error)))
  };
};
