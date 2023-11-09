import { apiInstanceHandler } from './apiService';
import { updateProfileSuccess} from '../ReduxFunctions/userActions';

export const updateUserProfile = (token, firstName, lastName) => {
    return async (dispatch) => {
        const api = apiInstanceHandler(dispatch);
        const headers = {
                Authorization: `Bearer ${token}`
            };
        const response = await  api.put('/profile', { firstName, lastName }, { headers });
        dispatch(updateProfileSuccess(response.data));
    };
};