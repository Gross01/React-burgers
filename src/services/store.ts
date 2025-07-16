import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {ingredientsSlice} from './ingredients/slice'
import {constructorSlice} from './constructor-items/slice'
import {orderSlice} from './order/slice'
import {userSlice} from './user-info/slice'

const rootReducer = combineReducers({
    ingredients:  ingredientsSlice.reducer,
    constructorItems: constructorSlice.reducer,
    order: orderSlice.reducer,
    userInfo: userSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer
})