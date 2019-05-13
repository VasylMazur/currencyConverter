import { Button, Card, TextField } from "@material-ui/core";
import Dinero from "dinero.js";

import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
// tslint:disable-next-line: ordered-imports
import {
  setFromCurrencySuccess,
  setToCurrencySuccess,
  switchCurrency
} from "../store/currencyForm/actions";
import { convertThunk } from "../store/currencyForm/thunks/convertThunk";
import { IAppState } from "../store/initialState.d";
import "../styles/formStyles.css";
import { ICurrencyFormProps } from "./CurrencyForm.d";
import { getCurrenciesThunk } from "../store/currencyGraph/thunks/getCurrenciesThunk";

const CurrencyForm: FunctionComponent<ICurrencyFormProps> = ({
  ...props
}: ICurrencyFormProps) => {
  return (
    <Card
      className="CardForm"
      style={{
        backgroundColor: "#a5b9ff",
        paddingBottom: "4em",
        paddingTop: "4em"
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
        type="number"
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
        color="inherit"
        onClick={() => {
          props.switchCurrency();
          props.getCurrenciesThunk();
        }}
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
        value={props.toCurrency.getAmount() / 100}
        disabled={true}
      />
      <Button
        style={{ marginBottom: "1em", display: "block" }}
        variant="contained"
        color="primary"
        onClick={() => {
          props.convertThunk(
            Dinero({
              amount: props.fromCurrency.getAmount() * 100,
              currency: props.fromCurrency.getCurrency()
            }),
            props.toCurrency.getCurrency()
          );
          props.getCurrenciesThunk();
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
  getCurrenciesThunk,
  switchCurrency
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyForm);
