import { LOGIN_SUCCESS, LOGIN_FAILURE, TOKEN_INFOS, GET_ACCOUNTS, LOGOUT } from './actionTypes';


const initialState = {
    user: null,
    error: null,
    tokenInfos: null,
    accounts: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, error: null };
        case LOGIN_FAILURE:
            return { ...state, user: null, error: action.payload };
        case TOKEN_INFOS: 
            return { ...state, tokenInfos: action.payload };
        case GET_ACCOUNTS:
            return { ...state, accounts: action.payload };
        case LOGOUT:
            return { ...state, user: null, tokenInfos: null, accounts: null };
                
        default:
            return state;
    }
};
