import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, TOKEN_INFOS, GET_ACCOUNTS, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS, ERROR_MESSAGE, IS_LOADING } from "./actionTypes";

/**
 * Action creators for Redux store.
 *
 * for creating actions about to user authentication,
 * profile updates, and application state management. These actions are dispatched
 * to the Redux store to update states.
 *
 * @module ActionCreators
 */

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

export function logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
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

export const errorMessage = (error) => ({
    type: ERROR_MESSAGE,
    payload: error,
});

export const isLoading = (loading) => ({
    type: IS_LOADING,
    payload: loading,
});