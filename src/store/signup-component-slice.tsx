import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type userState = {
  name: string;
  email: string;
  number: string;
  plan: "arcade" | "pro" | "advanced";
  paymentInterval: "monthly" | "yearly";
  addOn: Array<string>;
  step: number;
};

const initialState: userState = {
  name: "",
  email: "",
  number: "",
  plan: "arcade",
  paymentInterval: "monthly",
  addOn: ["Online service", "Larger storage", "Customizable profile"],
  step: 1,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state: userState, action: PayloadAction<userState>) => {
      return {...state, ...action.payload};
    },
    incrementStep: (state: userState) => {
      state.step++;
    },
    decrementStep: (state: userState) => {
      state.step--;
    },
  },
});

export const {addUser, incrementStep, decrementStep} = userSlice.actions;
export default userSlice.reducer;
