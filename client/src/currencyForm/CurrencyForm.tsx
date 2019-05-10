import Dinero from "dinero.js";
import React, {
  Component,
  FunctionComponent,
  useState,
  useEffect
} from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { IAppState } from "../store/initialState.d";
// tslint:disable-next-line: ordered-imports
import {
  setFromCurrencySuccess,
  setToCurrencySuccess,
  switchCurrency
} from "../store/currencyForm/actions";
import { Button, TextField } from "@material-ui/core";
import { Form } from "grommet";
import { CurrencyFields } from "./CurrencyFields";
import { convertThunk } from "../store/currencyForm/thunks/convertThunk";
import { AnyAction } from "redux";
export interface ICurrencyFormProps {
  fromCurrency: Dinero.Dinero;
  toCurrency: Dinero.Dinero;
  convertThunk: Function;
  setFromCurrencySuccess: typeof setFromCurrencySuccess;
  setToCurrencySuccess: typeof setToCurrencySuccess;
  switchCurrency: typeof switchCurrency;
}

const CurrencyForm: FunctionComponent<ICurrencyFormProps> = ({
  ...props
}: ICurrencyFormProps) => {
  // const [fromAmount, setFromAmount] = useState(props.fromCurrency.getAmount());
  // const [fromCurrency, setFromCurrency] = useState(
  //   props.fromCurrency.getCurrency()
  // );
  // const [toAmount, setToAmount] = useState(props.toCurrency.getAmount());
  // const [toCurrency, setToCurrency] = useState(props.toCurrency.getCurrency());

  return (
    <div>
      {/* <CurrencyFields
        key={
          props.fromCurrency.getCurrency() +
          props.toCurrency.getAmount().toString() +
          props.toCurrency.getCurrency() + props.toCurrency.getAmount()}
        fromAmount={fromAmount}
        fromCurrency={fromCurrency}
        setFromAmount={setFromAmount}
        setFromCurrency={setFromCurrency}
        toAmount={toAmount}
        toCurrency={toCurrency}
        setToCurrency={setToCurrency}
      /> */}
      <TextField
        value={props.fromCurrency.getCurrency()}
        type="text"
        onChange={event =>
          props.setFromCurrencySuccess(
            Dinero({
              currency: event.target.value,
              amount: props.fromCurrency.getAmount()
            })
          )
        }
        label="From currency"
      />
      <TextField
        value={props.fromCurrency.getAmount()}
        type="number"
        onChange={event =>
          !isNaN(parseInt(event.target.value, 10))  &&
          props.setFromCurrencySuccess(
            Dinero({
              amount: parseInt(event.target.value),
              currency: props.fromCurrency.getCurrency()
            })
          )
        }
        label="From amount"
      />

      <TextField
        type="text"
        label="To currency"
        value={props.toCurrency.getCurrency()}
        onChange={event =>
          props.setToCurrencySuccess(
            Dinero({
              amount: props.toCurrency.getAmount(),
              currency: event.target.value
            })
          )
        }
      />
      <TextField
        type="number"
        label="To amount"
        value={props.toCurrency.getAmount()}
        disabled={true}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          alert("salam");
          props.convertThunk(
            props.fromCurrency,
            props.toCurrency.getCurrency()
          );
        }}
      >
        Convert
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => props.switchCurrency()}
      >
        Switch
      </Button>
    </div>
  );
};
const mapStateToProps = (state: IAppState) => {
  return {
    fromCurrency: state.formState.fromCurrency,
    toCurrency: state.formState.toCurrency
  };
};
const mapDispatchToProps = {
  setFromCurrencySuccess,
  setToCurrencySuccess,

  convertThunk,
  switchCurrency
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyForm);
