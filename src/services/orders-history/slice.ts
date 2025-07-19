import {TOrdersFeedMessage} from "../../utils/types";
import {createSlice} from "@reduxjs/toolkit";
import {onError, onMessage, wsConnected, wsDisconnected} from "./actions";

type TInitialState = {
    connected: boolean,
    message: TOrdersFeedMessage | null,
    error: string | null
}

const initialState: TInitialState = {
    connected: false,
    message: null,
    error: null,
}

export const ordersHistorySlice = createSlice({
    name: "orders-history",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(wsConnected, (state) => {
                state.connected = true
                state.error = null
            })
            .addCase(wsDisconnected, (state) => {
                state.connected = false
                state.message = null
            })
            .addCase(onMessage, (state, action) => {
                state.message = action.payload;
            })
            .addCase(onError, (state, action) => {
                state.error = action.payload;
            })
    }
})