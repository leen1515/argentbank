import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

const initialState = {
    user: null,
    error: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, error: null };
        case LOGIN_FAILURE:
            return { ...state, user: null, error: action.payload };
        default:
            return state;
    }
};
