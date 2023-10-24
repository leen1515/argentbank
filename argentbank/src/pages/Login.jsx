import styled from 'styled-components';
import { Button, MainStyle, Title } from '../style/Global';
import api from '../services/apiService';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../ReduxFunctions/userActions';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/ModalError';

const Main = styled(MainStyle)`
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
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

const Input = styled.input`
    padding: 5px;
    font-size: 1.2rem;
`;

const RememberMeWrapper = styled.div`
    display: flex;
    margin-bottom: 1rem;
`;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (rememberMe) {
            localStorage.setItem('savedEmail', email); 
        } else {
            localStorage.removeItem('savedEmail'); 
        }
        try {
            const response = await api.post('/login', { email, password });
            if (response.data.status === 200) {
                dispatch(loginSuccess(response.data.body)); 
                const tokenDisplay = response.data.body.token;
                dispatch({ type: "TOKEN_INFOS", payload: tokenDisplay });
                navigate('/dashboard');
            } else {
                const errMsg = `Login failed with status: ${response.data.status}`;
                dispatch(loginFailure(errMsg));
                setErrorMessage(errMsg);
                setShowErrorModal(true);
            }            
        } catch (error) {
            const errMsg = `Login error: ${error.message || error}`;
            dispatch(loginFailure(errMsg));
            setErrorMessage(errMsg);
            setShowErrorModal(true);
        } 
    };
        useEffect(() => {
            const savedEmail = localStorage.getItem('savedEmail');
            if (savedEmail) {
                setEmail(savedEmail);
                setRememberMe(true); 
            }
        }, []);
    return (
        <Main>
            <Section>
                <Icon className="fa fa-user-circle" />
                <LoginTitle>Sign In</LoginTitle>
                <Form onSubmit={handleSubmit}>
                <InputWrapper>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Email" 
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </InputWrapper>
                    <RememberMeWrapper>
                        <Input 
                            type="checkbox" 
                            id="remember-me" 
                            checked={rememberMe} 
                            onChange={(e) => setRememberMe(e.target.checked)} 
                        /><Label htmlFor="remember-me">Remember me</Label>               
                        </RememberMeWrapper>
                    <SignInButton type="submit">Sign In</SignInButton>
                </Form>
            </Section>
                <Modal show={showErrorModal} onClose={() => setShowErrorModal(false)}>
                    <h2>Error</h2>
                    <p>{errorMessage}</p>
                    <Button onClick={() => setShowErrorModal(false)}>Close</Button>
                </Modal>
        </Main>
    );
}

export default Login;