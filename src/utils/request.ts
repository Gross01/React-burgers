import {TOptionsType} from "./types";
import {fetchWithRefresh} from "./fetch-with-refresh";
import {BASE_URL} from "./constants";
import {TSuccess} from './types'

const checkResponse = (res: Response) => {
    if (res.ok) {
        return res.json()
    }

    return Promise.reject(`Ошибка ${res.status}`)
}

const checkSuccess = (res: TSuccess) => {
    if (res && res.success) {
        return res;
    }

    return Promise.reject(`Ответ не success: ${res}`);
}

export const request = (endpoint?: string, options?: TOptionsType, withRefresh?: boolean) => {

    return withRefresh
        ?
        fetchWithRefresh(`${BASE_URL}${endpoint}`, options)
            .then(checkSuccess)
        :
        fetch(`${BASE_URL}${endpoint}`, options)
            .then(checkResponse);
};