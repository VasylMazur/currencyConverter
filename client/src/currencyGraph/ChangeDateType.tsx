import { Button } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { setDateType } from "../store/currencyGraph/actions";
import {  IAppState } from "../store/initialState.d";
import "../styles/graphInformation.css";
import { DateType } from "../types/DateType.d";
import { IChangeDateTypeProps } from "./ChangeDateType.d";

const ChangeDateType: FunctionComponent<IChangeDateTypeProps> = ({
  ...props
}: IChangeDateTypeProps) => {
  return (
    <div className="GraphInformationContainer">
      {" "}
      <h1>
        Graph date type in{" "}
        {props.dateType}
      </h1>
      <Button color="primary" onClick={() => props.setDateType(DateType.YEAR)}>
        Set date to years
      </Button>
      <Button color="primary" onClick={() => props.setDateType(DateType.MONTH)}>
        {" "}
        Set date to months{" "}
      </Button>
      <Button color="primary" onClick={() => props.setDateType(DateType.DAY)}>
        Set date to days
      </Button>
    </div>
  );
};
const mapStateToProps = (state: IAppState) => {
  return {
    dateType: state.graphState.dateType
  };
};
const mapDispatchToProps = {
  setDateType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeDateType);
