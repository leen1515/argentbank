import { apiInstanceHandler } from "./apiService";
import { getAccounts, isLoading } from "../ReduxFunctions/userActions";

export const fetchProfil = (token) => 
    async (dispatch) => {
    const api = apiInstanceHandler(dispatch);
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    try{
    dispatch(isLoading(true));
    const response = await api.post("/profile", {}, { headers });
    const getProfileDatas = response.data.body;
    dispatch(
        getAccounts({
        firstName: getProfileDatas.firstName,
        lastName: getProfileDatas.lastName,
        email: getProfileDatas.email,
        accounts: getProfileDatas.accounts,
        })
    );
    } catch(error){
        console.log(error);
    } finally {
        dispatch(isLoading(false));}
};
