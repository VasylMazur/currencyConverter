import { Button, TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import {
  setDateType,
  setFromDate,
  setToDate
} from "../store/currencyGraph/actions";
import { getCurrenciesThunk } from "../store/currencyGraph/thunks/getCurrenciesThunk";
import { DateType, IAppState } from "../store/initialState.d";
export interface IDateFormProps {
  dateType: DateType;
  fromDate: number;
  toDate: number;
  getCurrenciesThunk: Function;
  setDateType: typeof setDateType;
  setFromDate: typeof setFromDate;
  setToDate: typeof setToDate;
}
const DateForm: FunctionComponent<IDateFormProps> = ({
  ...props
}: IDateFormProps) => {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    action: typeof setFromDate | typeof setToDate
  ) => {
    isNaN(parseInt(event.target.value, 10))
      ? action(1)
      : action(parseInt(event.target.value, 10));
  };
  return (
    <div>
      <h1>
        Date type now is in{" "}
        {props.dateType === DateType.YEAR
          ? "years"
          : props.dateType === DateType.MONTH
          ? "months"
          : "days"}
      </h1>
      <Button color="primary" onClick={() => props.setDateType(DateType.YEAR)}>
        Set date in years
      </Button>
      <Button color="primary" onClick={() => props.setDateType(DateType.MONTH)}>
        {" "}
        Set date in months{" "}
      </Button>
      <Button color="primary" onClick={() => props.setDateType(DateType.DAY)}>
        Set date in days
      </Button>
      <TextField
        type="number"
        label="Set start of graph"
        value={props.fromDate}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event, props.setFromDate)
        }
      />
      <TextField
        type="number"
        label="Set end of graph"
        value={props.toDate}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event, props.setFromDate)
        }
      />
      <Button
        color="primary"
        variant="contained"
        onClick={() => props.getCurrenciesThunk()}
      >
        Build graph
      </Button>
    </div>
  );
};
const mapStateTopProps = (state: IAppState) => {
  return {
    dateType: state.graphState.dateType,
    fromDate: state.graphState.fromDate,
    toDate: state.graphState.toDate
  };
};
const mapDispatchToProps = {
  getCurrenciesThunk,
  setDateType,
  setFromDate,
  setToDate
};
export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(DateForm);
