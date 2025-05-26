import {createSelector} from '@reduxjs/toolkit'

const selectIngredients = (state) => state.ingredients.items

export const selectBun = createSelector(
    [selectIngredients],
    (ingredients) => ingredients.data ? ingredients.data.filter(item => item.type === 'bun') : []
)

export const selectSauce = createSelector(
    [selectIngredients],
    (ingredients) => ingredients.data ? ingredients.data.filter(item => item.type === 'sauce') : []
)

export const selectMain = createSelector(
    [selectIngredients],
    (ingredients) => ingredients.data ? ingredients.data.filter(item => item.type === 'main') : []
)

