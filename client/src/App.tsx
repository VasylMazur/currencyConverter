import React from "react";

import { connect } from "react-redux";
import "./App.css";
import CurrencyForm from "./currencyForm/CurrencyForm";
import DateForm from "./currencyGraph/DateForm";
import Graph from "./currencyGraph/Graph";

const App: React.FC = () => {
  return (
    <>
      <CurrencyForm />
      <Graph />
      <DateForm />
    </>
  );
};

export default connect()(App);
