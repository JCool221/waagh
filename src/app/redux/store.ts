import { configureStore } from "@reduxjs/toolkit";
import unitDataReducer from "./slices/unitDataSlice";

export const store = configureStore({
    reducer: {
        Unit: unitDataReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch