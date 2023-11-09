import { LOGIN_SUCCESS, LOGIN_FAILURE, TOKEN_INFOS, GET_ACCOUNTS, LOGOUT, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS, ERROR_MESSAGE} from './actionTypes';


const initialState = {
    user: null,
    error: null,
    tokenInfos: null,
    accounts: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, 
                user: action.payload, 
                error: null };
        case LOGIN_FAILURE:
            return { ...state, user: null };
        case TOKEN_INFOS: 
            return { ...state, tokenInfos: action.payload };
        case GET_ACCOUNTS:
            return { ...state, accounts: action.payload };
        case LOGOUT:
            return { ...state, 
                user: null, 
                tokenInfos: null, 
                accounts: null };
            case UPDATE_PROFILE_SUCCESS:
                return { 
                    ...state, 
                    accounts: {
                        ...state.accounts, 
                        firstName: action.payload.firstName, 
                        lastName: action.payload.lastName 
                    }, 
                    error: null 
                };
            
        case UPDATE_PROFILE_FAILURE:
            return { ...state, 
                user: null };
                
        case ERROR_MESSAGE:
            return { ...state, 
                error: action.payload
        };

        default:
            return state;
    }
};
