import { LOGIN_FAILURE, LOGIN_SUCCESS, TOKEN, TOKEN_INFOS, GET_ACCOUNTS } from "./actionTypes";
export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error.message,
});

export const token = (token) => ({
    type: TOKEN,
    payload: token,
}); 

export const tokenInfos = (token) => ({
    type: TOKEN_INFOS,
    payload: token,
});
export const getAcounts = (accounts) => ({
    type: GET_ACCOUNTS,
    payload: accounts,
});
