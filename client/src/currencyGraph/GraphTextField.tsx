import React, { FunctionComponent } from "react";
import { DateFormActions } from "./DateForm.d";
import { TextField } from "@material-ui/core";

import { DateType } from "../store/initialState.d";
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
      type="number"
      label={`Set ${inputType} in the ${isEnd ? "end" : "start"} of graph`}
      value={inputValue === 0 ? "" : inputValue}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
        handleInputChange(event, action, maxValue)
      }
      disabled={isEnd && inputType !== dateType}
    />
  );
};
