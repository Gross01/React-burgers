import {fetchWithRefresh} from "./fetch-with-refresh";
import {AUTH_URL, RESET_URL} from "./constants";

export const getUserInfo = async () => {
    const response = await fetchWithRefresh(`${AUTH_URL}/user`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })

    if (!response.success) {
        console.log(response.error);
    }

    return response;
}

export const forgotPasswordRequest = async (email: string) => {
    try {
        const response = await fetch(RESET_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: email})
        })

        if (!response.ok) {
            console.log(response)
        }

        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export const changePassword = async (password: string, token: string) => {
    try {
        const response = await fetch(`${RESET_URL}/reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({password: password, token: token})
        })

        if (!response.ok) {
            console.log(response)
        }

        return await response.json()
    } catch (error) {
        console.log(error)
    }
}