import { Button, Card, TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import {
  setDateType,
  setFromDateDay,
  setFromDateMonth,
  setFromDateYear,
  setToDateDay,
  setToDateMonth,
  setToDateYear
} from "../store/currencyGraph/actions";
import { getCurrenciesThunk } from "../store/currencyGraph/thunks/getCurrenciesThunk";
import { DateType, IAppState } from "../store/initialState.d";
import "../styles/formStyles.css";
import { DateFormActions, IDateFormProps } from "./DateForm.d";
import { GraphTextField, MAX_MONTH } from "./GraphTextField";
export const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  action: DateFormActions,
  maxValue: number
) => {
  const numberedInputValue = parseInt(event.target.value, 10);
  if (isNaN(numberedInputValue)) {
    action(0);
  } else {
    if (numberedInputValue > maxValue) {
      action(maxValue);
    } else if (numberedInputValue > 0) {
      action(numberedInputValue);
    }
  }
};
const DateForm: FunctionComponent<IDateFormProps> = ({
  ...props
}: IDateFormProps) => {
  return (
    <Card className="CardForm" style={{backgroundColor: "#ffa4d9"}}>

      <GraphTextField
        inputValue={props.fromDate.year}
        inputType={DateType.YEAR}
        action={props.setFromDateYear}
        dateType={props.dateType}
        isEnd={false}
      />
      <GraphTextField
        inputValue={props.fromDate.month}
        inputType={DateType.MONTH}
        action={props.setFromDateMonth}
        dateType={props.dateType}
        isEnd={false}
      />
      <GraphTextField
        inputValue={props.fromDate.day}
        inputType={DateType.DAY}
        action={props.setFromDateDay}
        dateType={props.dateType}
        isEnd={false}
      />
      <GraphTextField
        inputValue={props.toDate.year}
        inputType={DateType.YEAR}
        action={props.setToDateYear}
        dateType={props.dateType}
        isEnd={true}
      />
      <GraphTextField
        inputValue={props.toDate.month}
        inputType={DateType.MONTH}
        action={props.setToDateMonth}
        dateType={props.dateType}
        isEnd={true}
      />
      <GraphTextField
          inputValue={props.toDate.day}
          inputType={DateType.DAY}
          action={props.setToDateDay}
          dateType={props.dateType}
          isEnd={true}
      />
      <Button
        color="secondary"
        variant="contained"
        onClick={() => props.getCurrenciesThunk()}
      >
        Build graph
      </Button>
    </Card>
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
  setFromDateDay,
  setFromDateMonth,
  setFromDateYear,
  setToDateDay,
  setToDateMonth,
  setToDateYear
};
export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(DateForm);
