import {createSlice} from '@reduxjs/toolkit'
import {getIngredients} from './thunk'

const initialState = {
    items: [],
    loading: false,
    error: false, 
}

export const ingredientsSlice = createSlice({
    name: 'ingridients',
    initialState,
    extraReducers: builder => { 
        builder
            .addCase(getIngredients.pending, (state) => {
                state.loading = true
            })
            .addCase(getIngredients.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(getIngredients.rejected, (state) => {
                state.loading = false
                state.error = true
            })
    }
})