import {createSlice} from '@reduxjs/toolkit'
import {sendOrder} from './thunk'

type TInitialState = {
    loading: boolean,
    error: boolean,
    orderNumber: number | null,
}

const initialState: TInitialState = {
    loading: false,
    error: false,
    orderNumber: null,
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
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