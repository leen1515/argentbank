import styled from "styled-components";
import { Button } from "../style/Global";

const TransactionButton = styled(Button)`
    display: block;
    width: 200px;
    padding: 8px;
    font-size: 1.1rem;
    margin-top: 1rem;
    align-self: flex-end;
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
    flex-direction: row;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem;
`;

const AccountContentWrapper = styled.div`
    width: 100%;
    flex: 1;
`;
const AccountContentButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
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

function Solde({accountTitle, accountAmount, accountAmountDescription}){

    return(
        <AccountSection key={new Date().getTime}>
        <AccountContentWrapper>
            <AccountTitle>{accountTitle}</AccountTitle>
            <AccountAmount>{accountAmount}</AccountAmount>
            <AccountAmountDescription>{accountAmountDescription}</AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentButton>
            <TransactionButton>Views transactions</TransactionButton>
        </AccountContentButton>
        </AccountSection>
    )
}

export default Solde;   