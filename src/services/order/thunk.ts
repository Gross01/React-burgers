import {createAsyncThunk} from '@reduxjs/toolkit'
import {BASE_URL, ORDERS_URL} from "../../utils/constants";
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

export const getOrderInfo = createAsyncThunk(
    'order/getOrderInfo',
    async (orderNumber: number, thunkAPI) => {
        try {
            const response = await fetch(`${BASE_URL}/orders/${orderNumber}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) {
                return thunkAPI.rejectWithValue('Ошибка отправки запроса')
            }

            return await response.json()
        } catch (error) {
            return thunkAPI.rejectWithValue((error as Error).message)
        }
    }
)