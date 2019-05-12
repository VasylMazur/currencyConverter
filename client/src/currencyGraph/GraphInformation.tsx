import React, { FunctionComponent } from "react";

import { connect } from "react-redux";
import { DateType } from "../store/initialState.d";
import { IAppState } from "../store/initialState.d";
import "../styles/graphInformation.css";
import { IGraphInformationProps } from "./GraphInformation.d";

const GraphInformation: FunctionComponent<IGraphInformationProps> = ({
  ...props
}: IGraphInformationProps) => {
  const endDate =
    props.dateType === DateType.YEAR
      ? `${props.toDate.year}-${props.fromDate.month}-${props.fromDate.day}`
      : props.dateType === DateType.MONTH
      ? `${props.fromDate.year}-${props.toDate.month}-${props.fromDate.day}`
      : `${props.fromDate.year}-${props.fromDate.month}-${props.toDate.day}`;
  return (
    <div className="GraphInformationContainer">
      <h1>
        Convert from {props.fromCurrency} to {props.toCurrency}{" "}
      </h1>
      <h3>
        In the interval from {props.fromDate.year}-{props.fromDate.month}-
        {props.fromDate.day} to {endDate}
      </h3>
    </div>
  );
};
const mapStateToProps = (state: IAppState) => {
  return {
    dateType: state.graphState.dateType,
    fromCurrency: state.formState.fromCurrency.getCurrency(),
    fromDate: state.graphState.fromDate,
    toCurrency: state.formState.toCurrency.getCurrency(),
    toDate: state.graphState.toDate
  };
};
export default connect(mapStateToProps)(GraphInformation);
