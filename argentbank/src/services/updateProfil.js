import { apiInstanceHandler } from "./apiService";
import { updateProfileSuccess, isLoading, getAccounts } from "../ReduxFunctions/userActions";

export const updateUserProfile = (token, firstName, lastName) => async (dispatch) => {
    const api = apiInstanceHandler(dispatch);
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await api.put("/profile", { firstName, lastName }, { headers });
        dispatch(updateProfileSuccess(response.data));
        const getProfileDatas = response.data.body;
        dispatch(
            getAccounts({
            firstName: getProfileDatas.firstName,
            lastName: getProfileDatas.lastName,
            email: getProfileDatas.email,
            accounts: getProfileDatas.accounts,
            })
        );        
        console.log("updateprofil", response.data.body);

    } catch (error) {
        console.error(error);
    } finally {
        dispatch(isLoading(false));
    }
};
