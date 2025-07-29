/// <reference types="jest" />

import {addIngredient, constructorSlice, initialState, moveItem, removeIngredient} from "./slice";

describe('constructor-items slice', () => {

    const testIngredient = {
        name: 'Ingredient',
        image: 'image',
        price: 80,
        bun: false,
        ingredientId: '111',
        id: '123',
    }

    it ('should return the initial state', () => {
        expect(constructorSlice.reducer(undefined, {type: ''})).toEqual(initialState);
    })

    it ('should add ingredient to state', () => {
        const newState = constructorSlice.reducer(initialState, addIngredient(testIngredient))

        expect(newState).toEqual([testIngredient])
    })

    it('should delete previous bun if added ingredient is bun', () => {
        const ingredient = {
            name: 'Ingredient',
            image: 'image',
            price: 80,
            bun: true,
            ingredientId: '111',
            id: '123',
        }

        const newState = constructorSlice.reducer([{
            name: 'bun in state',
            bun: true,
            ingredientId: '123',
            image: 'image',
            id: '123',
            price: 123
        }], addIngredient(ingredient))

        expect(newState).toEqual([ingredient])
    })

    it('should remove ingredient from state', () => {
        const newState = constructorSlice.reducer([testIngredient], removeIngredient(testIngredient.id))

        expect(newState).toEqual([])
    })

    it('should move ingredient', () => {
        const state = [
            testIngredient,
            {
                name: 'Ingredient',
                image: 'image',
                price: 80,
                bun: false,
                ingredientId: '111',
                id: '12345'
            }
        ]

        const newState = constructorSlice.reducer(state, moveItem({fromIndex: 0, toIndex: 1}))
        expect(newState).toEqual([...state.reverse()])
    })
})