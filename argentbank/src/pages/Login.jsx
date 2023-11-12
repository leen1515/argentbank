import styled from 'styled-components';
import { Button, MainStyle, Title } from '../style/Global';
import { apiInstanceHandler } from '../services/apiService';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, isLoading } from '../ReduxFunctions/userActions';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/ModalError';
import { isValidEmail, isValidPassword } from '../utils';
import Loader from '../components/Loader';
import { errorMessage } from '../ReduxFunctions/userActions';
import  useLocalStorage  from '../customhooks/useLocalStorage';

const Main = styled(MainStyle)`
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const SignInButton = styled(Button)`
    display: block;
    width: 100%;
    text-decoration: none;
`;

const LoginTitle = styled(Title)`
`;

const Section = styled.section`
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
`;

const Icon = styled.i`
    font-size: 5rem;
    color: #2c3e50;
`;


const Form = styled.form``;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
`;

const Label = styled.label`
    font-weight: bold;

`;
const RememberDiv = styled.div`
        font-size: 1rem;
        font-weight: 200;
        `;

const Input = styled.input`
    padding: 5px;
    font-size: 1.2rem;
`;

const RememberMeWrapper = styled.div`
    display: flex;
    margin-bottom: 1rem;
`;

/**
 * Login page component.
 *
 * It's responsible for rendering the login form and handling user authentication.
 * It manages local states for user inputs, loading status, and error handling. It also integrates
 * with Redux for global state management and navigation after successful login.
 *
 * @name LoginComponent
 * @memberof UI
 * @component
 * @example
 * return (
 *   <Login />
 * )
 */
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);

    const [savedEmail, setSavedEmail, removeSavedEmail] = useLocalStorage('savedEmail', '');
    const [userToken, setUserToken, removeUserToken] = useLocalStorage('userToken', null);
    const [userData, setUserData, removeUserData] = useLocalStorage('userData', null);
    const loading = useSelector(state => state.authentification.isLoading); 

    const dispatch = useDispatch();
    const api = apiInstanceHandler(dispatch);
    const navigate = useNavigate();
    const errMessage = useSelector(state => state.authentification.error);
    /**
     * Handles the submission of the login form.
     * Performs input validation, dispatches login actions, and navigates to the dashboard.
     * @param {Event} event - The form submission event.
     */
    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(isLoading(true));
        if (!isValidEmail(email)) {
            dispatch(errorMessage("Invalid email address."));
            setShowErrorModal(true);
            dispatch(isLoading(false));
            return;
        }

        if (!isValidPassword(password)) {
            dispatch(errorMessage("Password must be at least 3 characters long and contain at least one letter and one number."));
            setShowErrorModal(true);
            dispatch(isLoading(false));
            return;
        }

        try {
            const response = await api.post('/login', { email, password });
            const tokenDisplay = response.data.body.token;
            dispatch(loginSuccess(response.data.body));
            dispatch({ type: "TOKEN_INFOS", payload: tokenDisplay });

            if (rememberMe) {
                setSavedEmail(email);
                setUserToken(tokenDisplay);
                setUserData(JSON.stringify(response.data.body));
            } else {
                removeSavedEmail();
                removeUserToken();
                removeUserData();
            }

            navigate('/dashboard');

        } catch (error) {
            setShowErrorModal(true);
            if (!rememberMe) {
                removeSavedEmail();
                removeUserToken();
                removeUserData();
            }
            navigate('/login');
        } finally {
            dispatch(isLoading(false));
        }
    };

    useEffect(() => {
        if (savedEmail) {
            setEmail(savedEmail);
            setRememberMe(true);
        }
    }, [savedEmail]);

    return (
        <Main>
            {loading && <Loader />}
            <Section>
                <Icon className="fa fa-user-circle" />
                <LoginTitle>Sign In</LoginTitle>
                <Form onSubmit={handleSubmit}>
                    <InputWrapper>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email" 
                            value={email || ''}
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Email" 
                            autoComplete='off'
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={password || ''}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            autoComplete='off'
                        />
                    </InputWrapper>
                    <RememberMeWrapper>
                        <Input 
                            type="checkbox" 
                            id="remember-me" 
                            checked={rememberMe} 
                            onChange={(e) => setRememberMe(e.target.checked)} 
                        />
                        <Label htmlFor="remember-me"><RememberDiv>Remember me</RememberDiv></Label>               
                    </RememberMeWrapper>
                    <SignInButton type="submit">Sign In</SignInButton>
                </Form>
            </Section>
            <Modal show={showErrorModal} onClose={() => {
        setShowErrorModal(false);
                }}>
                <h2>Error</h2>
                <p>{errMessage}</p>
                <Button onClick={() => setShowErrorModal(false)}>Close</Button>
            </Modal>
        </Main>
    );
}

export default Login;