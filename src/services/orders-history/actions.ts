import {createAction} from "@reduxjs/toolkit";
import {TOrdersFeedMessage} from "../../utils/types";

export const wsConnect = createAction<string, 'orders-feed/connect'>('orders-feed/connect');
export const wsConnected = createAction('orders-feed/connected')
export const wsDisconnect = createAction('orders-feed/disconnect');
export const wsDisconnected = createAction('orders-feed/disconnected');
export const onMessage = createAction<TOrdersFeedMessage, 'orders-feed/message'>('orders-feed/message');
export const onError = createAction<string, 'orders-feed/Error'>('orders-feed/Error')