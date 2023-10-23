import { LOGIN_FAILURE, LOGIN_SUCCESS, TOKEN_INFOS, GET_ACCOUNTS, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS } from "./actionTypes";
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

export const LOGOUT = 'LOGOUT';

export function logout() {
    return {
        type: LOGOUT,
    };
}

export const updateProfileSuccess = (userProfile) => ({
    type: UPDATE_PROFILE_SUCCESS,
    payload: userProfile,
});

export const updateProfileFailure = (error) => ({
    type: UPDATE_PROFILE_FAILURE,
    payload: error,
});