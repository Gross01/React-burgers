import {userSlice, initialState, setIsAuthChecked, setUser, setError, setUserInfoIsChange} from "./slice";
import {changeUserInfo, loginUser, logoutUser, registerUser} from "./thunk";

describe('user info slice', () => {

    const userMockInfo = {name: 'Artem', email: 'artem@artem.com', password: '123'}

    it ('should return the initial state', () => {
        const newState = userSlice.reducer(undefined, {type: ''})
        expect(newState).toEqual(initialState)
    })

    it ('should set isAuthChecked', () => {
        const newState = userSlice.reducer(undefined, setIsAuthChecked(true))
        expect(newState).toEqual({
            ...initialState,
            isAuthChecked: true,
        })
    })

    it ('should set user', () => {
        const newState = userSlice.reducer(undefined, setUser(userMockInfo))
        expect(newState).toEqual({
            ...initialState,
            user: userMockInfo,
        })
    })

    it ('should set error', () => {
        const newState = userSlice.reducer(undefined, setError(true))
        expect(newState).toEqual({
            ...initialState,
            error: true,
        })
    })

    it ('should set userInfoIsChanged', () => {
        const newState = userSlice.reducer(undefined, setUserInfoIsChange(true))
        expect(newState).toEqual({
            ...initialState,
            userInfoIsChange: true,
        })
    })

    it ('should register user', () => {
        const newState = userSlice.reducer(undefined, {type: registerUser.fulfilled.type, payload: {user: userMockInfo}})

        expect(newState).toEqual({
            ...initialState,
            user: {name: userMockInfo.name, email: userMockInfo.email}
        })
    })

    it ('should login user', () => {
        const newState = userSlice.reducer(undefined, {type: loginUser.fulfilled.type, payload: {user: userMockInfo}})

        expect(newState).toEqual({
            ...initialState,
            user: {name: userMockInfo.name, email: userMockInfo.email},
            isAuthChecked: true,
            error: false,
        })
    })

    it ('should logout user', () => {
        const newState = userSlice.reducer({...initialState, user: userMockInfo}, {type: logoutUser.fulfilled.type})
        expect(newState).toEqual({
            ...initialState,
            user: null,
        })
    })

    it ('should change user info', () => {
        const newState = userSlice.reducer(undefined, {type: changeUserInfo.fulfilled.type, payload: {user: userMockInfo}})

        expect(newState).toEqual({
            ...initialState,
            user: {name: userMockInfo.name, email: userMockInfo.email},
            userInfoIsChange: true
        })
    })
})