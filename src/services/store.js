import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {ingredientsSlice} from './ingredients/slice'
import {constructorSlice} from './constructor-items/slice'

const rootReducer = combineReducers({
    ingredients:  ingredientsSlice.reducer,
    constructorItems: constructorSlice.reducer,
})

export const createStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}