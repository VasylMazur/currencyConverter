import React, { FunctionComponent } from "react";
import { Button, TextField } from "@material-ui/core";
import { IAppState, DateType } from "../store/initialState.d";
import {
  setDateType,
  setFromDate,
  setToDate
} from "../store/currencyGraph/actions";
import { connect } from "react-redux";
import { getCurrenciesThunk } from "../store/currencyGraph/thunks/getCurrenciesThunk";
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
        onChange={event =>
          isNaN(parseInt(event.target.value, 10))
            ? props.setFromDate(1)
            : props.setFromDate(parseInt(event.target.value, 10))
        }
      />
      <TextField
        type="number"
        label="Set end of graph"
        value={props.toDate}
        onChange={event =>
          isNaN(parseInt(event.target.value))
            ? props.setToDate(1)
            : props.setToDate(parseInt(event.target.value))
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
