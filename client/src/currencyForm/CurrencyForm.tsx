import { Button, TextField } from "@material-ui/core";
import Dinero from "dinero.js";
import { Form } from "grommet";
import React, {
  Component,
  FunctionComponent,
  useEffect,
  useState
} from "react";
import { connect } from "react-redux";
// tslint:disable-next-line: ordered-imports
import {
  setFromCurrencySuccess,
  setToCurrencySuccess,
  switchCurrency
} from "../store/currencyForm/actions";
import { IAppState } from "../store/initialState.d";

import { convertThunk } from "../store/currencyForm/thunks/convertThunk";
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
  return (
    <div>
      <TextField
        value={props.fromCurrency.getCurrency()}
        type="text"
        onChange={event =>
          props.setFromCurrencySuccess(
            Dinero({
              amount: props.fromCurrency.getAmount(),
              currency: event.target.value
            })
          )
        }
        label="From currency"
      />
      <TextField
        value={props.fromCurrency.getAmount()}
        type="number"
        onChange={event =>
          !isNaN(parseInt(event.target.value, 10)) &&
          props.setFromCurrencySuccess(
            Dinero({
              amount: parseInt(event.target.value, 10),
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
