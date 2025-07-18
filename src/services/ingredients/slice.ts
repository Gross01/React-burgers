import {createSlice} from '@reduxjs/toolkit'
import {getIngredients} from './thunk'
import {TIngredient} from "../../utils/types";

type TItems = {
    success: boolean,
    data: TIngredient[]
}

type TInitialState = {
    items: TItems | null,
    loading: boolean,
    error: boolean
}

const initialState: TInitialState = {
    items: null,
    loading: false,
    error: false, 
}

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {},
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