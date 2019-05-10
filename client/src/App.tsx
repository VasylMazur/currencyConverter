import React from "react";

import { connect } from "react-redux";
import "./App.css";
import CurrencyForm from "./currencyForm/CurrencyForm";
import { Chart, Grommet } from "grommet";
import { Graph } from "./graph/Graph";

const App: React.FC = () => {
  return (
    <Grommet>
      <CurrencyForm />
      <Graph/>
    </Grommet>
  );
};

export default connect()(App);
