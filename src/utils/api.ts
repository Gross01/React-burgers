import {request} from "./request";

export const getUserInfo = () => request('/auth/user', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
}, true)

export const forgotPasswordRequest = (email: string) => request('/password-reset', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email})
})

export const changePassword = (password: string, token: string) => request('/password-reset/reset', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({password: password, token: token})
})
