import { configureStore } from "@reduxjs/toolkit";
// For the below line, we will get accountSlice.reducer into accountReducer as it was imported as default.
import accountReducer from "./features/account/accountSlice";
// For the below line, we will get customerSlice.reducer into accountReducer as it was imported as default.

import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
