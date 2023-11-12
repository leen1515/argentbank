import styled from 'styled-components';
import { useSelector, useDispatch} from 'react-redux';
import { Button, MainStyle } from '../style/Global';
import Solde from '../components/Solde';
import { useState, useEffect } from 'react';
import { updateUserProfile } from '../services/updateProfil';
import { isValidName } from '../utils';
import Modal from '../components/ModalError';

const Main = styled(MainStyle)`
    flex: 1;
`;
const EditButton = styled(Button)`
width: 200px;
`;

const EditMode = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @media (min-width: 720px){
        flex-direction: row;
    }
`;

const FieldWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (min-width: 720px){
        flex-direction: column;
    }
    & > input {
        width: 50%;
        height: 30px;
        margin: 2px 0px;
        padding: 5px;
        font-size: 1.2rem;
        @media (min-width: 720px){
            width: 200px;
        }
    }
`;

const Header = styled.div`
    color: #fff;
    margin-bottom: 2rem;
`;

const ButtonEditRight = styled(Button)`
    width: 70px;
    margin-top: 0;
    margin-right :0;
    @media (min-width: 720px){
        margin-right :140px;
        margin-top: 1rem;

    }
`;

const ButtonEditLeft = styled(Button)`
    width: 70px;
    margin-top: 0;
    margin-left:0;
    @media (min-width: 720px){
        margin-left: 140px;
        margin-top: 1rem;

    }
`;


/**
 * Dashboard component, user's profile page.
 *
 * Component serves as the main user interface for displaying the user's account information
 * and allowing the user to edit their name. It uses Redux for state management to handle user profile data
 * and local component state to manage edit modes and error handling.
 *
 * @name DashboardComponent
 * @memberof UI
 * @component
 * @example
 * return (
 *   <Dashboard />
 * )
 */
function Dashboard() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.authentification.tokenInfos);
    const profile = useSelector(state => state.authentification.accounts);
    const [editMode, setEditMode] = useState(false);
    const [tempFirstName, setTempFirstName] = useState(profile?.firstName || "");
    const [tempLastName, setTempLastName] = useState(profile?.lastName || "");
    
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (profile) {
            if (tempFirstName === null) setTempFirstName(profile.firstName);
            if (tempLastName === null) setTempLastName(profile.lastName);
        }
    }, [profile]);

    /**
     * Toggles the edit mode for user profile name.
     */
    const handleEditClick = () => {
        if (tempFirstName === "" && profile) {
            setTempFirstName(profile.firstName);
        }
        if (tempLastName === "" && profile) {
            setTempLastName(profile.lastName);
        }
        setEditMode(!editMode);
    };
    /**
     * Saves the updated user profile name.
     * Performs validation and dispatches update profile action.
     */
    const handleSaveClick = () => {
        if ((!isValidName(tempFirstName) || !isValidName(tempLastName)) ) {
            const errMsg = "Invalid name. Names can only contain letters, spaces, hyphens, and apostrophes.";
            setErrorMessage(errMsg);
            setShowErrorModal(true);
            return;
        }
        dispatch(updateUserProfile(token, tempFirstName, tempLastName));
        setEditMode(false);
    };

const displayFirstName = profile?.firstName || tempFirstName;
const displayLastName = profile?.lastName || tempLastName;


    return (
        <Main>
            <Header><h1>Welcome back</h1>
                {(profile) && (
                    editMode ? (
                    <EditMode>
                        <FieldWrapper>
                            <input 
                                value={tempFirstName}
                                placeholder={profile.firstName || ""}
                                onChange={(e) => setTempFirstName(e.target.value)}
                            
                            />
                            <ButtonEditLeft onClick={handleSaveClick}>Save</ButtonEditLeft>
                            </FieldWrapper>
                            <FieldWrapper><input 
                                value={tempLastName}
                                onChange={(e) => setTempLastName(e.target.value)}
                                placeholder={profile.lastName || ""}
                            />
                            <ButtonEditRight onClick={handleEditClick}>Cancel</ButtonEditRight>
                            </FieldWrapper>
                            </EditMode>
                    ) : (
                        <>
                            <h1>{displayFirstName + " " + displayLastName}!</h1>        
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
        <Modal show={showErrorModal} onClose={() => setShowErrorModal(false)}>
                    <h2>Error</h2>
                    <p>{errorMessage}</p>
                    <Button onClick={() => setShowErrorModal(false)}>Close</Button>
                </Modal>
        </Main>
    );
}

export default Dashboard;
