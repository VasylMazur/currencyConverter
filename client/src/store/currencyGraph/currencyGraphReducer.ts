import { initialState } from "../initialState";
import { IGraphState } from "./../initialState.d";
import {
  CLEAR_GRAPH_CURRENCIES,
  GET_GRAPH_CURRENCIES_SUCCESS,
  GRAPH_ERROR,
  GraphActionTypes,
  SET_DATE_TYPE,
  SET_FROM_DATE,
  SET_TO_DATE
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
    case SET_FROM_DATE: {
      return { ...state, fromDate: action.payload };
    }
    case SET_TO_DATE: {
      return { ...state, toDate: action.payload };
    }
    case CLEAR_GRAPH_CURRENCIES: {
      return { ...state, currencies: [] };
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
