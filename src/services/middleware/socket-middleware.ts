import {RootStore} from "../store";
import {Middleware} from "redux";
import {ActionCreatorWithoutPayload, ActionCreatorWithPayload} from "@reduxjs/toolkit";

type TWsActions<T> = {
    connect: ActionCreatorWithPayload<string>,
    connected: ActionCreatorWithoutPayload,
    disconnect: ActionCreatorWithoutPayload,
    disconnected: ActionCreatorWithoutPayload,
    onMessage: ActionCreatorWithPayload<T>,
    onError: ActionCreatorWithPayload<string>,
}

export const socketMiddleware = <T>(wsActions: TWsActions<T>): Middleware<Record<string, never>, RootStore> => {
    return (store) => {
        let socket: WebSocket | null = null;
        const {connect, connected, disconnect, disconnected, onMessage, onError} = wsActions;
        const {dispatch} = store

        return (next) => (action) => {
            if (connect.match(action)) {
                socket = new WebSocket(action.payload);

                socket.onopen = () => {
                    dispatch(connected());
                }

                socket.onerror = () => {
                    dispatch(onError('unknown error'));
                }

                socket.onmessage = (event) => {
                    try {
                        const data = JSON.parse(event.data);
                        dispatch(onMessage(data));
                    } catch (e) {
                        dispatch(onError((e as Error).message));
                    }
                }

                return
            }

            if (socket && disconnect.match(action)) {
                dispatch(disconnected())
                socket.close()
                socket = null

                return
            }

            next(action);
        }
    }
}