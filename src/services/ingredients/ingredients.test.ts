import {ingredientsSlice, initialState} from "./slice";
import {getIngredients} from "./thunk";

describe('ingredients slice', () => {
    it('should return the initial state', () => {
        const newState = ingredientsSlice.reducer(undefined, {type: ''})
        expect(newState).toEqual(initialState)
    })

    it('should return the items after fulfilled getIngredients action', () => {
        const payload = {
            success: true,
            data: []
        }

        const newState = ingredientsSlice.reducer(undefined, {type: getIngredients.fulfilled.type, payload: {...payload}})

        expect(newState).toEqual({
            ...initialState,
            items: payload
        })
    })

    it('should activate loading while it pending', () => {
        const newState = ingredientsSlice.reducer(undefined, {type: getIngredients.pending.type})
        expect(newState).toEqual({
            ...initialState,
            loading: true
        })
    })

    it('should activate error if rejected', () => {
        const newState = ingredientsSlice.reducer(undefined, {type: getIngredients.rejected.type})
        expect(newState).toEqual({
            ...initialState,
            error: true
        })
    })
})