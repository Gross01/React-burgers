import {createSlice} from "@reduxjs/toolkit";
import {loginUser, logoutUser, registerUser, changeUserInfo} from "./thunk";

const initialState = {
    user: null,
    isAuthCheked: false,
    error: false,
    userInfoIsChange: false,
}

export const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setIsAuthChecked: (state, action) => {
            state.isAuthCheked = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setUserInfoIsChange: (state, action) => {
            state.userInfoIsChange = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = {name: action.payload.user.name, email: action.payload.user.email}
                state.error = false
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.error = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = {name: action.payload.user.name, email: action.payload.user.email}
                state.isAuthCheked = true
                state.error = false
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = true
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.user = null
            })
            .addCase(changeUserInfo.fulfilled, (state, action) => {
                state.user = {name: action.payload.user.name, email: action.payload.user.email}
                state.userInfoIsChange = true
            })
    }
})

export const {setIsAuthChecked,
    setUser,
    setError,
    setUserInfoIsChange
} = userSlice.actions;