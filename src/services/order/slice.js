import {createSlice} from '@reduxjs/toolkit'
import {sendOrder} from './thunk'

const initialState = {
    loading: false,
    error: false,
    orderNumber: null,
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
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
    }

})