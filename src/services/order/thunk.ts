import {createAsyncThunk} from '@reduxjs/toolkit'
import {ORDERS_URL} from "../../utils/constants";
import {fetchWithRefresh} from "../../utils/fetch-with-refresh";

export const sendOrder = createAsyncThunk(
    'order/sendOrder',
    async (ingredientsId: string[], thunkAPI) => {
        try {
            const response = await fetchWithRefresh(ORDERS_URL, {
                method: 'POST',
                body: JSON.stringify({ ingredients: ingredientsId }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })

            if (!response.success) {
                return thunkAPI.rejectWithValue('Ошибка отправки запроса')
            }

            return response
        } catch (error) {
            return thunkAPI.rejectWithValue((error as Error).message)
        }
    }
)