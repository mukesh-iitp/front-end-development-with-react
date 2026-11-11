// define counter action constants here
export const RESET_COUNTER = "Reset Counter";
export const INCREMENT_COUNTER = "Increment Counter";
export const DECREMENT_COUNTER = "Decrement Counter";

// define counter action creators here
export const resetCounter = () => ({ type: RESET_COUNTER });
export const incrementCounter = () => ({ type: INCREMENT_COUNTER });
export const decrementCounter = () => ({ type: DECREMENT_COUNTER });
