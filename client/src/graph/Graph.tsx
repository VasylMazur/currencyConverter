import React, { FunctionComponent } from "react";
import { Chart } from "grommet";
export const Graph: FunctionComponent = () => {
  return (
    <Chart
      bounds={[[0, 11], [0, 100]]}
      values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
    />
  );
};
