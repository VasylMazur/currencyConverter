import { Button, TextField, Card } from "@material-ui/core";
import Dinero from "dinero.js";

import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
// tslint:disable-next-line: ordered-imports
import {
  setFromCurrencySuccess,
  setToCurrencySuccess,
  switchCurrency
} from "../store/currencyForm/actions";
import { IAppState } from "../store/initialState.d";
import "../styles/formStyles.css";
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
    <Card
      className="CardForm"
      style={{
        backgroundColor: "#a5b9ff"
      }}
    >
      <TextField
        style={{ marginBottom: "1em" }}
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
        style={{ marginBottom: "1em" }}
        value={props.fromCurrency.getAmount()}
        // type="number"
        onChange={event =>
          !isNaN(parseFloat(event.target.value)) &&
          props.setFromCurrencySuccess(
            Dinero({
              amount: parseFloat(event.target.value),
              currency: props.fromCurrency.getCurrency()
            })
          )
        }
        label="From amount"
      />
      <Button
        style={{ marginBottom: "1em" }}
        variant="contained"
        color="secondary"
        onClick={() => props.switchCurrency()}
      >
        Switch
      </Button>
      <TextField
        style={{ marginBottom: "1em" }}
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
        style={{ marginBottom: "1em" }}
        label="To amount"
        value={props.toCurrency.toFormat()}
        disabled={true}
      />
      <Button
        style={{ marginBottom: "1em", display: "block" }}
        variant="contained"
        color="primary"
        onClick={() => {
          alert("salam");
          props.convertThunk(
            Dinero({
              amount: props.fromCurrency.getAmount() * 100,
              currency: props.fromCurrency.getCurrency()
            }),
            props.toCurrency.getCurrency()
          );
        }}
      >
        Convert
      </Button>
    </Card>
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
