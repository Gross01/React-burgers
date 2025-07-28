import {orderSlice, initialState, removeOrder} from "./slice";
import {getOrderInfo, sendOrder} from "./thunk";

describe('order slice', () => {

    const orderMock =  {
        _id: '',
        ingredients: ['123'],
        status: 'pending',
        name: 'ing',
        createdAt: '12',
        updatedAt: '12',
        number: 123,
    }

    it('should return the initial state', () => {
        const newState = orderSlice.reducer(undefined, {type: ''})
        expect(newState).toEqual(initialState)
    })

    it('should remove order', () => {
        const newState = orderSlice.reducer({...initialState, order: orderMock}, removeOrder())

        expect(newState).toEqual({...initialState, order: null})
    })

    it('should add order number', () => {
        const number = 123
        const newState = orderSlice.reducer(undefined, {type: sendOrder.fulfilled.type, payload: {order: {number: number}}})

        expect(newState).toEqual({
            ...initialState,
            loading: false,
            orderNumber: number,
        })
    })

    it('should add order info', () => {
        const newState = orderSlice.reducer(undefined, {type: getOrderInfo.fulfilled.type, payload: {orders: [orderMock]}})
        expect(newState).toEqual({
            ...initialState,
            loading: false,
            order: orderMock,
        })
    })
})