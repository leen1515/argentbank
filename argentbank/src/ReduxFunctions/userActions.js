import { LOGIN_FAILURE, LOGIN_SUCCESS, TOKEN_INFOS, GET_ACCOUNTS } from "./actionTypes";
export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error.message,
});

export const tokenInfos = (token) => ({
    type: TOKEN_INFOS,
    payload: token,
});
export const getAccounts = (accounts) => ({
    type: GET_ACCOUNTS,
    payload: accounts,
});
