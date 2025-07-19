import {RootStore} from "../store";
import {Middleware} from "redux";
import {ActionCreatorWithoutPayload, ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {refreshToken} from "../../utils/fetch-with-refresh";

type TWsActions<T> = {
    connect: ActionCreatorWithPayload<string>,
    connected: ActionCreatorWithoutPayload,
    disconnect: ActionCreatorWithoutPayload,
    disconnected: ActionCreatorWithoutPayload,
    onMessage: ActionCreatorWithPayload<T>,
    onError: ActionCreatorWithPayload<string>,
}

export const socketMiddleware = <T>(wsActions: TWsActions<T>, withTokenRefresh: boolean = false): Middleware<Record<string, never>, RootStore> => {
    return (store) => {
        let socket: WebSocket | null = null;
        const {connect, connected, disconnect, disconnected, onMessage, onError} = wsActions;
        const {dispatch} = store
        let wsConnected = false
        let timerId: ReturnType<typeof setTimeout> | null = null;
        let url = ''
        const RELOAD_TIME = 3000

        return (next) => (action) => {
            if (connect.match(action)) {
                socket = new WebSocket(action.payload);
                url = action.payload;

                socket.onopen = () => {
                    dispatch(connected());
                }

                socket.onerror = () => {
                    dispatch(onError('unknown error'));
                }

                socket.onmessage = (event) => {
                    try {
                        const data = JSON.parse(event.data);

                        if (withTokenRefresh && data.message === 'Invalid or missing token') {
                            refreshToken()
                                .then((refreshedData) => {
                                    const wssUrl = new URL(url)
                                    wssUrl.searchParams.set(
                                        'token',
                                        refreshedData.accessToken.replace('Bearer ', '')
                                    );
                                    dispatch(connect(wssUrl.toString()))
                                })
                                .catch((e) => {
                                    dispatch(onError((e as Error).message));
                                })
                            dispatch(disconnect())
                            return
                        }

                        dispatch(onMessage(data));
                    } catch (e) {
                        dispatch(onError((e as Error).message));
                    }
                }

                socket.onclose = () => {
                    if (wsConnected) {
                        timerId = setTimeout(() => {
                            dispatch(connect(url))
                        }, RELOAD_TIME);
                    }
                }

                return
            }

            if (socket && disconnect.match(action)) {
                wsConnected = false
                dispatch(disconnected())
                if (timerId) {
                    clearTimeout(timerId)
                    timerId = null
                }
                socket.close()
                socket = null

                return
            }

            next(action);
        }
    }
}