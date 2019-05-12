import { TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { DateFormActions } from "./DateForm.d";

import { DateType } from "../store/initialState.d";
import "../styles/formStyles.css";
import { IGraphTextFieldProps } from "./GraphTextField.d";

export const GraphTextField: FunctionComponent<IGraphTextFieldProps> = ({
  inputValue,
  inputType,
  inputAction,
  dateType,
  isEnd
}: IGraphTextFieldProps) => {
  const MAX_YEAR = 2019;
  const MAX_MONTH = 12;
  const MAX_DAY = 30;
  const handleInputChange = (
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
  const maximumValue =
    inputType === DateType.YEAR ? MAX_YEAR : inputType === DateType.MONTH ? MAX_MONTH : MAX_DAY;
  return (
    <TextField
      style={{ marginBottom: "1em" }}
      type="number"
      label={`${inputType} in the ${isEnd ? "end" : "start"} of graph`}
      value={inputValue === 0 ? "" : inputValue}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        handleInputChange(event, inputAction, maximumValue)
      }
      disabled={isEnd && inputType !== dateType}
    />
  );
};
