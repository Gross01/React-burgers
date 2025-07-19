import {createAction} from "@reduxjs/toolkit";
import {TOrdersFeedMessage} from "../../utils/types";

export const wsConnect = createAction<string, 'orders-history/connect'>('orders-history/connect');
export const wsConnected = createAction('orders-history/connected')
export const wsDisconnect = createAction('orders-history/disconnect');
export const wsDisconnected = createAction('orders-history/disconnected');
export const onMessage = createAction<TOrdersFeedMessage, 'orders-history/message'>('orders-history/message');
export const onError = createAction<string, 'orders-history/Error'>('orders-history/Error')