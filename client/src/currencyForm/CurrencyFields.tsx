import React, { FunctionComponent } from "react";
import { TextField } from "@material-ui/core";
export interface ICurrencyFieldsProps {
  fromAmount: number;
  setFromAmount: Function;
  fromCurrency: string;
  setFromCurrency: Function;
  toCurrency: string;
  setToCurrency: Function;
  toAmount: number;
}
export const CurrencyFields: FunctionComponent<ICurrencyFieldsProps> = ({...props}: ICurrencyFieldsProps) => {

  return (
    <div>
      <TextField
        type="text"
        value={props.fromCurrency}
        onChange={event => props.setFromCurrency(event.target.value)}
        label="From currency"
      />
      <TextField
        type="text"
        value={props.fromAmount}
        onChange={event => props.setFromAmount(event.target.value)}
        label="From amount"
      />

      <TextField
        type="text"
        label="To currency"
        value={props.toCurrency}
        onChange={event => props.setToCurrency(event.target.value)}
      />
      <TextField
        type="number"
        label="To amount"
        value={props.toAmount}
        disabled={true}
      />
    </div>
  );
};
