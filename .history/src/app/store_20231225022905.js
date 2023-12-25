import { configureStore } from "@reduxjs/toolkit";
import jobFindReducer from "../../src/features/jobFindSlice";

export const store = configureStore({
    reducer: {
        job: jobFindReducer
    },
});
