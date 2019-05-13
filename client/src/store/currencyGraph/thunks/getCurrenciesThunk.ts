import Dinero from "dinero.js";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { DateType } from "../../../types/DateType.d";
import { IAppState } from "../../initialState.d";
import {
  clearGraphCurrencies,
  getGraphCurrenciesSuccess,
  graphError
} from "../actions";

export const getCurrenciesThunk = (): ThunkAction<
  void,
  IAppState,
  null,
  AnyAction
> => async (dispatch, getState) => {
  try {
    dispatch(clearGraphCurrencies());
    const startDate = getState().graphState.fromDate;
    const currencyNameFromConvert = getState().formState.fromCurrency.getCurrency();
    const currencyNameToConvert = getState().formState.toCurrency.getCurrency();
    const endDate = getState().graphState.toDate;
    const dateType = getState().graphState.dateType;
    let dataUrl: string = "";
    let dateCrawler = 0;
    let endPoint = 0;
    if (dateType === DateType.DAY) {
      dateCrawler = startDate.day;
      endPoint = endDate.day;
    } else if (dateType === DateType.MONTH) {
      dateCrawler = startDate.month;
      endPoint = endDate.month;
    } else {
      dateCrawler = startDate.year;
      endPoint = endDate.year;
    }

    for (dateCrawler; dateCrawler <= endPoint; dateCrawler++) {
      if (dateType === DateType.YEAR) {
        dataUrl = `https://api.exchangeratesapi.io/${dateCrawler}-${
          startDate.month
        }-${
          startDate.day
        }?symbols=${currencyNameToConvert}&base=${currencyNameFromConvert}`;
      } else if (dateType === DateType.MONTH) {
        dataUrl = `https://api.exchangeratesapi.io/${
          startDate.year
        }-${dateCrawler}-${
          startDate.day
        }?symbols=${currencyNameToConvert}&base=${currencyNameFromConvert}`;
      } else {
        dataUrl = `https://api.exchangeratesapi.io/${startDate.year}-${
          startDate.month
        }-${dateCrawler}?symbols=${currencyNameToConvert}&base=${currencyNameFromConvert}`;
      }
      const convertedCurrency = await Dinero({
        amount: 100,
        currency: currencyNameFromConvert
      }).convert(currencyNameToConvert, {
        endpoint: dataUrl,
        propertyPath: "rates.{{to}}"
      });
      dispatch(
        getGraphCurrenciesSuccess({
          amount: convertedCurrency.getAmount() / 100,
          date: dateCrawler
        })
      );
    }
  } catch (error) {
    dispatch(graphError(error));
  }
};
