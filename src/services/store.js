import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {ingredientsSlice} from './ingredients/slice'
import {constructorSlice} from './constructor-items/slice'
import {currentIngredientSlice} from './current-ingredient/slice'
import {orderSlice} from './order/slice'

const rootReducer = combineReducers({
    ingredients:  ingredientsSlice.reducer,
    constructorItems: constructorSlice.reducer,
    currentIngredient: currentIngredientSlice.reducer,
    order: orderSlice.reducer
})

export const createStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}