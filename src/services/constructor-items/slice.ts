import {createSlice} from '@reduxjs/toolkit'
import {TConstructorIngredient} from "../../utils/types";

const initialState: TConstructorIngredient[] = []

export const constructorSlice = createSlice({
    name: 'constructorItems',
    initialState,
    reducers: {
        addIngredient: (state, action) => {
            if (action.payload.bun) {
                const removedBun = [...state.filter(item => !item.bun)]
                return [...removedBun, action.payload]
            }

            state.push(action.payload)
        },
        removeIngredient: (state, action) => {
            return [...state.filter(item => item.id !== action.payload)]
        },
        moveItem: (state, action) => {
            const {fromIndex, toIndex} = action.payload

            const [dragElement] = state.splice(fromIndex, 1)

            state.splice(toIndex, 0, dragElement)
        },
    }
})

export const {addIngredient, removeIngredient, moveItem} = constructorSlice.actions