import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = { message: null };

const alertSlice = createSlice({
  name: "alert",
  initialState: INITIAL_STATE,
  reducers: {
    resetAlert: (state, action) => {
      state.message = null;
    }
  },
  extraReducers: {
    "timer/startTimer": (state, action) => {
      state.message = "Timer has started.";
    },
    "timer/pauseTimer": (state, action) => {
      state.message = "Timer is paused.";
    },
    "timer/resetTimer": (state, action) => {
      state.message = "Timer set to 0.";
    }
  }
});

export const alertReducer = alertSlice.reducer;
export const { resetAlert } = alertSlice.actions;
export const alertSelector = (state) => state.alertReducer;
