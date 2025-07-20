import {createSelector} from '@reduxjs/toolkit'
import {TIngredient} from "../../utils/types";

const selectIngredients = (state: any) => state.ingredients.items

export const selectBun = createSelector(
    [selectIngredients],
    (ingredients) => ingredients.data ? ingredients.data.filter((item: TIngredient) => item.type === 'bun') : []
)

export const selectSauce = createSelector(
    [selectIngredients],
    (ingredients) => ingredients.data ? ingredients.data.filter((item: TIngredient) => item.type === 'sauce') : []
)

export const selectMain = createSelector(
    [selectIngredients],
    (ingredients) => ingredients.data ? ingredients.data.filter((item: TIngredient) => item.type === 'main') : []
)

