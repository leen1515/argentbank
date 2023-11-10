import { apiInstanceHandler } from "./apiService";
import { updateProfileSuccess, isLoading } from "../ReduxFunctions/userActions";

export const updateUserProfile = (token, firstName, lastName) =>
    async (dispatch) => {
    const api = apiInstanceHandler(dispatch);
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    try{
        dispatch(isLoading(true));
        const response = await api.put(
        "/profile",
        { firstName, lastName },
        { headers }
    );
    dispatch(updateProfileSuccess(response.data));
    } catch(error){
        console.log(error);
    } finally {
        dispatch(isLoading(false));}
};
