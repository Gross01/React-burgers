import {ordersHistorySlice, initialState} from "./slice";
import {onError, onMessage, wsConnected, wsDisconnected} from "./actions";

describe('orders-history slice', () => {
    it ('should return the initial state', () => {
        const newState = ordersHistorySlice.reducer(undefined, {type: ''})
        expect(newState).toEqual(initialState)
    })

    it('should connect to socket', () => {
        const newState = ordersHistorySlice.reducer(undefined, wsConnected())

        expect(newState).toEqual({
            ...initialState,
            connected: true,
            error: null,
        })
    })

    it('should disconnect socket', () => {
        const newState = ordersHistorySlice.reducer(undefined, wsDisconnected())

        expect(newState).toEqual({
            ...initialState,
            connected: false,
            message: null,
        })
    })

    it('should add message', () => {
        const payload = 'test value'
        const newState = ordersHistorySlice.reducer(undefined, {type: onMessage.type, payload: payload})

        expect(newState).toEqual({
            ...initialState,
            message: payload,
        })
    })

    it('should add error', () => {
        const payload = 'test value'
        const newState = ordersHistorySlice.reducer(undefined, {type: onError.type, payload: payload})

        expect(newState).toEqual({
            ...initialState,
            error: payload,
        })
    })
})