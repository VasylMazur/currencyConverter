import Dinero from "dinero.js";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { DateType, IAppState } from "../../initialState.d";
import { clearGraphCurrencies, getGraphCurrenciesSuccess, graphError } from "../actions";

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
    for (let dateCrawler = startDate; dateCrawler <= endDate; dateCrawler++) {
      if (dateType === DateType.YEAR) {
        // tslint:disable-next-line: max-line-length
        dataUrl = `https://api.exchangeratesapi.io/${dateCrawler}-01-01?symbols=${currencyNameToConvert}&base=${currencyNameFromConvert}`;
      } else if (dateType === DateType.MONTH) {
        // tslint:disable-next-line: max-line-length
        dataUrl = `https://api.exchangeratesapi.io/2019-${dateCrawler}-01?symbols=${currencyNameToConvert}&base=${currencyNameFromConvert}`;
      } else {
        // tslint:disable-next-line: max-line-length
        dataUrl = `https://api.exchangeratesapi.io/2019-04-${dateCrawler}?symbols=${currencyNameToConvert}&base=${currencyNameFromConvert}`;
      }
      // alert(dataUrl);
      const convertedCurrency = await Dinero({
        amount: 1,
        currency: currencyNameFromConvert
      }).convert(currencyNameToConvert, {
        endpoint: dataUrl,
        propertyPath: "rates.{{to}}"
      });
      dispatch(
        getGraphCurrenciesSuccess({
          amount: convertedCurrency.getAmount(),
          date: dateCrawler
        })
      );
    }
  } catch (error) {
    dispatch(graphError(error));
  }
};
