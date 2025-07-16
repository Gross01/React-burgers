import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchWithRefresh} from "../../utils/fetch-with-refresh";
import {AUTH_URL} from "../../utils/constants";
import {getUserInfo} from "../../utils/api";
import {setIsAuthChecked, setUser} from "./slice";

export const registerUser = createAsyncThunk(
    'user/register',
    async (userInfo, thunkAPI) => {
        try {
            const response = await fetch(`${AUTH_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: userInfo.name, email: userInfo.email, password: userInfo.password})
            })

            if (!response.ok) {
                return thunkAPI.rejectWithValue('Ошибка отправки запроса')
            }

            const resJson = await response.json()

            localStorage.setItem('accessToken', resJson.accessToken.split(' ')[1])
            localStorage.setItem('refreshToken', resJson.refreshToken)
            return resJson
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const loginUser = createAsyncThunk(
    'user/login',
    async (userInfo, thunkAPI) => {
        try {
            const response = await fetch(`${AUTH_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: userInfo.email, password: userInfo.password}),
            })

            if (!response.ok) {
                return thunkAPI.rejectWithValue('Ошибка отправки запроса')
            }

            const resJson = await response.json()

            localStorage.setItem('accessToken', resJson.accessToken.split(' ')[1])
            localStorage.setItem('refreshToken', resJson.refreshToken)
            return resJson
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const logoutUser = createAsyncThunk(
    'user/logout',
    async (_, thunkAPI) => {
        try {
            const response = await fetchWithRefresh(`${AUTH_URL}/logout`, {
                method: 'POST',
                body: JSON.stringify({
                    token: localStorage.getItem('refreshToken')
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!response.success) {
                return thunkAPI.rejectWithValue('Ошибка отправки запроса')
            }

            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')

            return await response
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const checkUserAuth = createAsyncThunk(
    'user/checkUserAuth',
    async (_, {dispatch}) => {

        if (localStorage.getItem('accessToken')) {
            getUserInfo()
                .then(res => dispatch(setUser(res.user)))
                .finally(() => dispatch(setIsAuthChecked(true)))
                .catch(e => console.log(e))
        } else {
            dispatch(setIsAuthChecked(true))
        }
    }
)

export const changeUserInfo = createAsyncThunk(
    'user/changeUserInfo',
    async (userInfo, thunkAPI) => {
        const token = localStorage.getItem('accessToken')

        try {
            const response = await fetchWithRefresh(`${AUTH_URL}/user`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({...userInfo})
            })

            if (!response.success) {
                return thunkAPI.rejectWithValue('Ошибка запроса')
            }

            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
