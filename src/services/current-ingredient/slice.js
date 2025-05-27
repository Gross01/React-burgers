import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    
}

export const currentIngredientSlice = createSlice({
    name: 'currentIngredient',
    initialState,
    reducers: {
        changeCurrentIngredient: (state, action) => {
            return {...action.payload}
        },
        cleanCurrentIngredient: (state, action) => {
            return {}
        }
    }
})

export const {changeCurrentIngredient, cleanCurrentIngredient} = currentIngredientSlice.actions 