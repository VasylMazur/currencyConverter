import React from "react";

import { connect } from "react-redux";
import "./App.css";
import CurrencyForm from "./currencyForm/CurrencyForm";
import DateForm from "./currencyGraph/DateForm";
import Graph from "./currencyGraph/Graph";
import ChangeDateType from "./currencyGraph/ChangeDateType";
import GraphInformation from "./currencyGraph/GraphInformation";

const App: React.FC = () => {
  return (
    <div className="AppGrid">
      <CurrencyForm />
      <div>
        <GraphInformation />
        <Graph />
        <ChangeDateType />
      </div>
      <DateForm />
    </div>
  );
};

export default connect()(App);
