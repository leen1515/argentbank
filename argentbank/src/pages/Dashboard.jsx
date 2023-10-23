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
width: 200px;
`;

const EditMode = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > input {
        width: 200px;
        height: 30px;
        margin: 2px 0px;
        padding: 5px;
        font-size: 1.2rem;
    }
`;

const Header = styled.div`
    color: #fff;
    margin-bottom: 2rem;
`;

const ButtonEditRight = styled(Button)`
    width: 70px;
    margin-top: 1rem;
    margin-right :140px;
`;
const ButtonEditLeft = styled(Button)`
    width: 70px;
    margin-top: 1rem;
    margin-left: 140px;
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
                    <EditMode>
                        <FieldWrapper>
                            <input 
                                value={tempFirstName? tempFirstName : ""}
                                placeholder={profile.firstName}
                                onChange={(e) => setTempFirstName(e.target.value)}
                            />
                            <ButtonEditLeft onClick={handleSaveClick}>Save</ButtonEditLeft>
                            </FieldWrapper>
                            <FieldWrapper><input 
                                value={tempLastName? tempLastName : ""}
                                onChange={(e) => setTempLastName(e.target.value)}
                                placeholder={profile.lastName}
                            />
                            <ButtonEditRight onClick={handleEditClick}>Cancel</ButtonEditRight>
                            </FieldWrapper>
                            </EditMode>
                    ) : (
                        <>
                            <h1>Welcome back<br/>{(tempFirstName? tempFirstName : profile.firstName) +" "+ (tempLastName? tempLastName:profile.lastName) }!</h1>        
                            <EditButton onClick={handleEditClick}>
                            Edit Name
                            </EditButton>
                        </>
                    )
                )}
            </Header>
        <Solde accountTitle = "Argent Bank Checking (x8349)" accountAmount = "$2,082.79" accountAmountDescription = "Available Balance"/>
        <Solde accountTitle = "Argent Bank Savings (x6712)" accountAmount = "$10,928.42" accountAmountDescription = "Available Balance"/>
        <Solde accountTitle = "Argent Bank Credit Card (x8349)" accountAmount = "$184.30" accountAmountDescription = "Available Balance"/>
        </Main>
    );
}

export default Dashboard;
