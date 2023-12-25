import { configureStore } from "@reduxjs/toolkit";
import jobFindReducer from "../features/jobFindSlice";

export const store = configureStore({
    reducer: {
        job: jobFindReducer,
    },
});
