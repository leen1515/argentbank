import { LOGIN_SUCCESS, LOGIN_FAILURE, TOKEN, TOKEN_INFOS, GET_ACCOUNTS } from './actionTypes';
import jwt_decode from 'jwt-decode';


const initialState = {
    user: null,
    error: null,
    token: null,
    tokenInfos: null,
    accounts: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, error: null };
        case LOGIN_FAILURE:
            return { ...state, user: null, error: action.payload };
        case TOKEN:
            return { ...state, token: action.payload };
        case TOKEN_INFOS: 
            const jwtInfo = jwt_decode(action.payload);
            console.log("Decoded Token:", jwtInfo);
            return { ...state, tokenInfos: jwtInfo };
        case GET_ACCOUNTS:
            return { ...state, accounts: action.payload };

        default:
            return state;
    }
};
