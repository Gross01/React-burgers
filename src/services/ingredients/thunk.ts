import {createAsyncThunk} from '@reduxjs/toolkit'
import {INGREDIENTS_URL} from "../../utils/constants";

export const getIngredients = createAsyncThunk(
    'ingredients/getIngredients',
    async (_, thunkAPI) => {
        try{
            const response = await fetch(INGREDIENTS_URL)
            
            if (!response.ok) {
                return thunkAPI.rejectWithValue('Ошибка загрузки ингредиентов')
            }

            return await response.json() 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)