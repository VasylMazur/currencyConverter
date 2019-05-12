import { TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { DateFormActions } from "./DateForm.d";

import { DateType } from "../store/initialState.d";
import "../styles/formStyles.css";
import { handleInputChange } from "./DateForm";
export interface IGraphTextFieldProps {
  inputValue: number;
  action: DateFormActions;
  inputType: DateType;
  dateType: DateType;
  isEnd: boolean;
}
export const MAX_YEAR = 2019;
export const MAX_MONTH = 12;
export const MAX_DAY = 30;
export const GraphTextField: FunctionComponent<IGraphTextFieldProps> = ({
  inputValue,
  inputType,
  action,
  dateType,
  isEnd
}: IGraphTextFieldProps) => {
  const maxValue =
    inputType === DateType.YEAR ? 2019 : inputType === DateType.MONTH ? 12 : 30;
  return (
    <TextField
      style={{ marginBottom: "1em" }}
      type="number"
      label={`${inputType} in the ${isEnd ? "end" : "start"} of graph`}
      value={inputValue === 0 ? "" : inputValue}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        handleInputChange(event, action, maxValue)
      }
      disabled={isEnd && inputType !== dateType}
    />
  );
};
