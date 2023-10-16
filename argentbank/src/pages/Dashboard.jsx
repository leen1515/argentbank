import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import api from '../services/apiService';
import { Button, MainStyle } from '../style/Global';
import { getAccounts } from '../ReduxFunctions/userActions';
import Solde from '../components/Solde';

const Main = styled(MainStyle)`
    flex: 1;
`;
const EditButton = styled(Button)`
`;



const Header = styled.div`
    color: #fff;
    margin-bottom: 2rem;
`;



function Dashboard() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.authentification.tokenInfos);
    const profile = useSelector(state => state.authentification.accounts);
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const headers = {
                    Authorization: `Bearer ${token}`
                };
                const response = await api.post('/profile', {}, { headers });
                const getProfileDatas = response.data.body;
                console.log("getProfileDatas", getProfileDatas);
                dispatch(getAccounts({
                    firstName: getProfileDatas.firstName, lastName: getProfileDatas.lastName, email: getProfileDatas.email, accounts: getProfileDatas.accounts
                }))
            } catch (error) {
                console.error("There was an error fetching the profile!", error);
            }
        };
        
        if (token) {
            fetchProfile();
        }
        
    }, [token]);

    return (
        <Main>
        <Header>
        {(profile) 
        &&<h1>Welcome, {profile?.firstName}!</h1>}
            <EditButton>Edit Name</EditButton>
        </Header>
        <Solde accountTitle = "Argent Bank Checking (x8349)" accountAmount = "$2,082.79" accountAmountDescription = "Available Balance"/>
        <Solde accountTitle = "Argent Bank Savings (x6712)" accountAmount = "$10,928.42" accountAmountDescription = "Available Balance"/>
        <Solde accountTitle = "Argent Bank Credit Card (x8349)" accountAmount = "$184.30" accountAmountDescription = "Available Balance"/>
        </Main>
    );
}

export default Dashboard;
