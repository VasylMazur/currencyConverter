import { initialState } from "../initialState";
import { IGraphState } from "./../initialState.d";
import {
  CLEAR_GRAPH_CURRENCIES,
  GET_GRAPH_CURRENCIES_SUCCESS,
  GRAPH_ERROR,
  GraphActionTypes,
  SET_DATE_TYPE,
  SET_FROM_DATE_DAY,
  SET_FROM_DATE_MONTH,
  SET_FROM_DATE_YEAR,
  SET_TO_DATE_DAY,
  SET_TO_DATE_MONTH,
  SET_TO_DATE_YEAR,
  SET_FROM_CURRENCY_NAME,
  SET_TO_CURRENCY_NAME
} from "./actions.d";

export const currencyGraphReducer = (
  state: IGraphState = initialState.graphState,
  action: GraphActionTypes
) => {
  switch (action.type) {
    case GET_GRAPH_CURRENCIES_SUCCESS: {
      return {
        ...state,
        currencies: state.currencies.concat([action.payload])
      };
    }
    case SET_DATE_TYPE: {
      return { ...state, dateType: action.payload };
    }
    case SET_FROM_DATE_YEAR: {
      return {
        ...state,
        fromDate: { ...state.fromDate, year: action.payload }
      };
    }
    case SET_FROM_DATE_MONTH: {
      return {
        ...state,
        fromDate: { ...state.fromDate, month: action.payload }
      };
    }
    case SET_FROM_DATE_DAY: {
      return {
        ...state,
        fromDate: { ...state.fromDate, day: action.payload }
      };
    }
    case SET_TO_DATE_YEAR: {
      return { ...state, toDate: { ...state.toDate, year: action.payload } };
    }
    case SET_TO_DATE_MONTH: {
      return { ...state, toDate: { ...state.toDate, month: action.payload } };
    }
    case SET_TO_DATE_DAY: {
      return { ...state, toDate: { ...state.toDate, day: action.payload } };
    }
    case CLEAR_GRAPH_CURRENCIES: {
      return { ...state, currencies: [] };
    }
    case SET_FROM_CURRENCY_NAME: {
      return { ...state, fromCurrencyName: action.payload };
    }
    case SET_TO_CURRENCY_NAME: {
      return { ...state, toCurrencyName: action.payload };
    }
    case GRAPH_ERROR: {
      return {
        ...state,
        errors: [...state.errors, action.payload]
      };
    }
    default:
      return state;
  }
};
