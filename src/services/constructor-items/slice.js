import {createSlice} from '@reduxjs/toolkit'

const initialState = []

export const constructorSlice = createSlice({
    name: 'constructorItems',
    initialState,
    reducers: {
        addIngridient: (state, action) => {

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
        }
    }
})

export const {addIngridient, removeIngredient, moveItem} = constructorSlice.actions