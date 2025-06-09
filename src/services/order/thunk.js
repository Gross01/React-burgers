import {createAsyncThunk} from '@reduxjs/toolkit'
import {ORDERS_URL} from "../../utils/constants";

export const sendOrder = createAsyncThunk(
    'order/sendOrder',
    async (ingredientsId, thunkAPI) => {
        try {
            const response = await fetch(ORDERS_URL, {
                method: 'POST',
                body: JSON.stringify({ ingredients: ingredientsId }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            if (!response.ok) {
                return thunkAPI.rejectWithValue('Ошибка отправки запроса')
            }

            return await response.json()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)