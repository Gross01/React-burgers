import {createAsyncThunk} from '@reduxjs/toolkit'

const URL = 'https://norma.nomoreparties.space/api/ingredients'

export const getIngredients = createAsyncThunk(
    'ingredients/getIngredients',
    async (_, thunkAPI) => {
        try{
            const response = await fetch(URL)
            
            if (!response.ok) {
                return thunkAPI.rejectWithValue('Ошибка загрузки ингредиентов')
            }

            return await response.json() 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)