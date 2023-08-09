import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type stepFunction = {
  nextFunction: () => void;
  backFunction: () => void;
  changeFunction: () => void;
};

const initialState: stepFunction = {
  nextFunction: () => {},
  backFunction: () => {},
  changeFunction: () => {},
};

const stepFunctionSlice = createSlice({
  name: "stepFunction",
  initialState,
  reducers: {
    changeStepFunction: (
      state: stepFunction,
      action: PayloadAction<stepFunction>
    ) => {
      return {...state, ...action.payload};
    },
  },
});

export const {changeStepFunction} = stepFunctionSlice.actions;

export default stepFunctionSlice.reducer;
