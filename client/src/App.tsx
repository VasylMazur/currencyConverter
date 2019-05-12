import React from "react";

import { connect } from "react-redux";
import "./App.css";
import CurrencyForm from "./currencyForm/CurrencyForm";
import DateForm from "./currencyGraph/DateForm";
import Graph from "./currencyGraph/Graph";

const App: React.FC = () => {
  return (
    <div className="AppGrid">
      <CurrencyForm />
      <div>
        <Graph />
        <DateForm />
      </div>
    </div>
  );
};

export default connect()(App);
