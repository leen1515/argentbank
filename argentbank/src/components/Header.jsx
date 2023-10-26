import React from 'react';
import styled from 'styled-components';
import argentBankLogo from '../img/argentBankLogo.png';
import userCircleIcon from '../icones/user-circle.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../ReduxFunctions/userActions';
import { useSelector } from 'react-redux';
import arrowRight from '../icones/arrow-right.svg';

const MainNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const NavItem = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 0.5rem;
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  max-width: 100%;
  width: 200px;
`;

const UserIcon = styled.img`
`;
const UserSignOut = styled.img`
width:20px;
height:20px;
`;

const SignIn = styled(NavItem)`
  display: flex;
  align-items: center;
`;
const LinkDashboard = styled(NavItem)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  margin-right: 0.5rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const SignOut = styled(NavItem)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  margin-right: 0.5rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentification.accounts);

  const handleLogout = () => {
    dispatch(logout());
};

  return (
    <MainNav>
      <NavLogo>
        <NavItem to="/">
          <LogoImage src={argentBankLogo} alt="Argent Bank Logo" />
        </NavItem>
      </NavLogo>

      {user ? (
                <NavItem>
                    <LinkDashboard to="/dashboard">
                    <UserIcon src={userCircleIcon} alt="User Icon" />{
                        user.firstName
                    }
                    </LinkDashboard>
                    <SignOut onClick={handleLogout}>
                    <UserSignOut src={arrowRight} alt="Sign Out Icon" />
                    Sign Out</SignOut>
                </NavItem>
            ) : (
                <SignIn to="/login">
                    <UserIcon src={userCircleIcon} alt="User Icon" />
                    Sign In
                </SignIn>
            )}
    </MainNav>
  );
}

export default Header;
