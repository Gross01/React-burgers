import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {ingredientsSlice} from './ingredients/slice'
import {constructorSlice} from './constructor-items/slice'
import {orderSlice} from './order/slice'
import {userSlice} from './user-info/slice'
import {useDispatch as dispatchHook, useSelector as selectorHook} from "react-redux";
import {ordersFeedSlice} from "./orders-feed/slice";
import {socketMiddleware} from "./middleware/socket-middleware";
import {onMessage, wsConnect, wsDisconnect, onError, wsConnected, wsDisconnected} from "./orders-feed/actions";

const rootReducer = combineReducers({
    ingredients:  ingredientsSlice.reducer,
    constructorItems: constructorSlice.reducer,
    order: orderSlice.reducer,
    userInfo: userSlice.reducer,
    ordersFeed: ordersFeedSlice.reducer
})

const ordersFeedMiddleWare = socketMiddleware({
    connect: wsConnect,
    connected: wsConnected,
    disconnect: wsDisconnect,
    disconnected: wsDisconnected,
    onMessage: onMessage,
    onError: onError,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(ordersFeedMiddleWare)
    }
})

export type RootStore = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useDispatch = dispatchHook.withTypes<AppDispatch>()
export const useSelector = selectorHook.withTypes<RootStore>()