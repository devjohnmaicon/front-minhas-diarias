import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: "123",
    user_name: "username",
    user_id: "b24c471e-47cb-49a2-9ffa-aac10ce9fdb6",
  },
  //   reducers: {
  //     increment(state) {
  //       state.value++;
  //     },
  //     decrement(state) {
  //       state.value--;
  //     },
  //     incrementByAmount(state, action) {
  //       state.value += action.payload;
  //     },
  //   },
});

// export const { increment, decrement, incrementByAmount } = login.actions;
export default loginSlice.reducer;
