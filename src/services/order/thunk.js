import {createAsyncThunk} from '@reduxjs/toolkit'

const URL = 'https://norma.nomoreparties.space/api/orders'

export const sendOrder = createAsyncThunk(
    'order/sendOrder',
    async (ingredientsId, thunkAPI) => {
        try {
            const response = await fetch(URL, {
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