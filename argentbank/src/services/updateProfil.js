import api from './apiService';
import { updateProfileFailure, updateProfileSuccess } from '../ReduxFunctions/userActions';
export const updateUserProfile = (token, firstName, lastName) => {
    return async (dispatch) => {
        try {
            const headers = {
                Authorization: `Bearer ${token}`
            };
            
            const response = await  api.put('/profile', { firstName, lastName }, { headers });
            
            dispatch(updateProfileSuccess(response.data));
        } catch (error) {
            dispatch(updateProfileFailure(error.message));
        }
    };
};