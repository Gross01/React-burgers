import {createSlice} from "@reduxjs/toolkit";
import {loginUser, logoutUser, registerUser, changeUserInfo} from "./thunk";

const initialState = {
    user: null,
    isAuthCheked: false,
}

export const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setIsAuthCheked: (state, action) => {
            state.isAuthCheked = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: builder => {
        builder

            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = {name: action.payload.user.name, email: action.payload.user.email}
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = {name: action.payload.user.name, email: action.payload.user.email}
                state.isAuthCheked = true
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.user = null
            })
            .addCase(changeUserInfo.fulfilled, (state, action) => {
                state.user = {name: action.payload.user.name, email: action.payload.user.email}
            })
    }
})

export const {setIsAuthCheked, setUser} = userSlice.actions;