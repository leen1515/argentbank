import { LOGIN_FAILURE, LOGIN_SUCCESS, TOKEN } from "./actionTypes";
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
