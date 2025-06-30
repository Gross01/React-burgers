import {AUTH_URL} from "./constants";

const checkResponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const refreshToken = () => {
    return fetch(`${AUTH_URL}/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    })
        .then(checkResponse)
        .then((refreshData) => {
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            localStorage.setItem('accessToken', refreshData.accessToken.split(' ')[1])
            return refreshData;
        });
};

type TOptionsType = {
    method?: string;
    headers?: HeadersInit;
    body?: BodyInit | null;
}

export const fetchWithRefresh = async (url: string, options: TOptionsType = {}) => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (err: unknown) {
        if (err instanceof Error && err.message === "jwt expired") {
            const refreshData = await refreshToken();
            const headers = new Headers(options.headers);
            headers.set('authorization', refreshData.accessToken);
            options.headers = headers;
            const res = await fetch(url, options);
            return await checkResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};