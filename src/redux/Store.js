import { configureStore } from "@reduxjs/toolkit"
import CurrencyReducer from "../feature/CurrencySlice"
export const store = configureStore({
    reducer: CurrencyReducer
})