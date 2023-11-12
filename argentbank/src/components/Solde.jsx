import styled from "styled-components";
import { Button } from "../style/Global";

const TransactionButton = styled(Button)`
    display: block;
    width: 200px;
    padding: 8px;
    font-size: 1.1rem;
    margin-top: 1rem;
    align-self: flex-end;
    @media (min-width: 720px){
    width: 200px;
    }
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
    @media (min-width: 720px) {
        flex-direction: row;
}
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

/**
 * An account balance section in the application.
 *
 * Component used to displays details of a user's account, including the title of the account,
 * the amount, and a description of the account amount. It also includes a button to view transactions.
 *
 * @name AccountBalance
 * @memberof UI
 * @component
 * @param {string} accountTitle - The title of the account.
 * @param {string} accountAmount - The total amount in the account.
 * @param {string} accountAmountDescription - A brief description of the account amount.
 * @example
 * return (
 *   <Solde 
 *     accountTitle="Checking Account" 
 *     accountAmount="$2,082.79" 
 *     accountAmountDescription="Available Balance"
 *   />
 * )
 */
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