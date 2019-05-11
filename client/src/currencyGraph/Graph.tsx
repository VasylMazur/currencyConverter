import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts";
import { IAppState, IGraphCurrency } from "../store/initialState.d";
export interface IGraphProps {
  currencies: IGraphCurrency[];
}
const Graph: FunctionComponent<IGraphProps> = ({...props}: IGraphProps) => {
  return (
    <LineChart width={600} height={300} data={props.currencies}>
    <Line type="monotone" dataKey="amount" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="date" />
    <YAxis />
  </LineChart>
  );
};
const mapStateToProps = (state: IAppState) => {
  return {
    currencies: state.graphState.currencies
  };
};
export default connect(mapStateToProps)(Graph);
