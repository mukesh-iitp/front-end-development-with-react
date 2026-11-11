import { configureStore } from "@reduxjs/toolkit";

const { timerReducer } = require("./redux/reducers/timerReducer");
const { counterReducer } = require("./redux/reducers/counterReducer");

const { loggerMiddleware } = require("./redux/middlewares/loggerMiddleware");

export const store = configureStore({
  reducer: { timerReducer, counterReducer },
  middleware: [loggerMiddleware]
});
