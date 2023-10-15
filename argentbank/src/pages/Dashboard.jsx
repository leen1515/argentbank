import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


import { Button, MainStyle } from '../style/Global';

const Main = styled(MainStyle)`
    flex: 1;
`;
const EditButton = styled(Button)`
`;
const TransactionButton = styled(Button)`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    margin-top: 1rem;
`;


const Header = styled.div`
    color: #fff;
    margin-bottom: 2rem;
`;

const Title = styled.h1``;

const AccountSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem;
`;

const AccountContentWrapper = styled.div`
    width: 100%;
    flex: 1;
`;

const AccountTitle = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
`;

const AccountAmount = styled.p`
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
`;

const AccountAmountDescription = styled.p`
    margin: 0;
`;

function Dashboard() {
        const user = useSelector(state => state.authentification.user);
        
        useEffect(() => {
            if (user) {
                console.log("Connected User Profile: ", user);
            }
        }, [user]); 

    return (
        <Main>
        <Header>
            <Title>Welcome back<br />Tony Jarvis!</Title>
            <EditButton>Edit Name</EditButton>
        </Header>
        {[1, 2, 3].map((account) => (
            <AccountSection key={account}>
            <AccountContentWrapper>
                <AccountTitle>Argent Bank Checking (x8349)</AccountTitle>
                <AccountAmount>$2,082.79</AccountAmount>
                <AccountAmountDescription>Available Balance</AccountAmountDescription>
            </AccountContentWrapper>
            <AccountContentWrapper>
                <TransactionButton>View transactions</TransactionButton>
            </AccountContentWrapper>
            </AccountSection>
        ))}
        </Main>
    );
}

export default Dashboard;
