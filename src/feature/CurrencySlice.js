import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
    currency: "USD",
    symbol: "$"
}

export const CurrencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        setCurrency: (state, action)=>{
            state.currency= action.payload;
            state.symbol = action.payload === "INR"? "₹" : "$";
        },
    },
});

export const {setCurrency} = CurrencySlice.actions

export default CurrencySlice.reducer