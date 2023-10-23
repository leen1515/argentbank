import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import api from '../services/apiService';
import { Button, MainStyle } from '../style/Global';
import { getAccounts } from '../ReduxFunctions/userActions';
import Solde from '../components/Solde';
import { useState } from 'react';
import { updateUserProfile } from '../services/updateProfil';

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
    const [editMode, setEditMode] = useState(false);
    const [tempFirstName, setTempFirstName] = useState(null);
    const [tempLastName, setTempLastName] = useState(null);
    
    const handleEditClick = () => {
        setEditMode(!editMode);
    };
    
    const handleSaveClick = () => {
        dispatch(updateUserProfile(token, tempFirstName, tempLastName));
        setEditMode(false);
    };
        
    return (
        <Main>
            <Header>
                {(profile) && (
                    editMode ? (
                        <>
                            <input 
                                value={tempFirstName}
                                onChange={(e) => setTempFirstName(e.target.value)}
                            />
                            <input 
                                value={tempLastName}
                                onChange={(e) => setTempLastName(e.target.value)}
                            />
                            <Button onClick={handleSaveClick}>Save</Button>
                        </>
                    ) : (
                        <h1>Welcome back<br/>{(tempFirstName? tempFirstName : profile.firstName) +" "+ (tempLastName? tempLastName:profile.lastName) }!</h1>
                    )
                )}
                <EditButton onClick={handleEditClick}>
                    {editMode ? "Cancel" : "Edit Name"}
                </EditButton>
            </Header>
        <Solde accountTitle = "Argent Bank Checking (x8349)" accountAmount = "$2,082.79" accountAmountDescription = "Available Balance"/>
        <Solde accountTitle = "Argent Bank Savings (x6712)" accountAmount = "$10,928.42" accountAmountDescription = "Available Balance"/>
        <Solde accountTitle = "Argent Bank Credit Card (x8349)" accountAmount = "$184.30" accountAmountDescription = "Available Balance"/>
        </Main>
    );
}

export default Dashboard;
