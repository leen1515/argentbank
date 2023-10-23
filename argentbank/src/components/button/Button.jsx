import React from 'react';
import './App.css'; // Make sure the path is correct
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: #008d68;
    }
`;

function SignInButton({ onClick }) {
        return (
                <Button to="/login" className="sign-in-button" onClick={onClick}>
                        Sign In
                </Button>
        );
}

export default SignInButton;

