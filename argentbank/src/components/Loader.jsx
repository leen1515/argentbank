import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoaderSpinner = styled.div`
  border: 4px solid #00bc77;
  border-radius: 50%;
  border-top: 4px solid #000;
  width: 40px;
  height: 40px;
  animation: ${spin} 2s linear infinite;
`;

function Loader(){
    return(
  <LoaderWrapper>
    <LoaderSpinner />
  </LoaderWrapper>)
};

export default Loader;