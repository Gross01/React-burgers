import {createSlice} from '@reduxjs/toolkit'
import {getOrderInfo, sendOrder} from './thunk'
import {TOrdersFeedItem} from "../../utils/types";

type TInitialState = {
    loading: boolean,
    error: boolean,
    orderNumber: number | null,
    order: TOrdersFeedItem | null,
}

const initialState: TInitialState = {
    loading: false,
    error: false,
    orderNumber: null,
    order: null,
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        removeOrder: (state) => {
            state.order = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(sendOrder.pending, (state) => {
                state.loading = true
            })
            .addCase(sendOrder.fulfilled, (state, action) => {
                state.loading = false
                state.orderNumber = action.payload.order.number
            })
            .addCase(sendOrder.rejected, (state) => {
                state.loading = false
                state.error = true
            })
            .addCase(getOrderInfo.fulfilled, (state, action) => {
                state.loading = false
                state.order = action.payload.orders[0]
            })
    }
})

export const {removeOrder} = orderSlice.actions