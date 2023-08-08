import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type userState = {
  name: string;
  email: string;
  number: string;
  plan: "arcade" | "pro" | "advanced";
  paymentInterval: "monthly" | "yearly";
  addOn: Array<string>;
};

const initialState: userState = {
  name: "",
  email: "",
  number: "",
  plan: "arcade",
  paymentInterval: "monthly",
  addOn: ["Online service", "Larger storage", "Customizable profile"],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state: userState, action: PayloadAction<userState>) => {
      return {...state, ...action.payload};
    },
  },
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;
