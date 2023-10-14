import React from 'react';
import styled from 'styled-components';
import argentBankLogo from '../img/argentBankLogo.png';
import userCircleIcon from '../icones/user-circle.svg';
import { Link } from 'react-router-dom';

const MainNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const NavItem = styled(Link)`
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
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

const SignIn = styled(NavItem)`
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <MainNav>
      <NavLogo>
        <NavItem to="/">
          <LogoImage src={argentBankLogo} alt="Argent Bank Logo" />
        </NavItem>
      </NavLogo>

      <SignIn to="/login">
        <UserIcon src={userCircleIcon} alt="User Icon" />
        Sign In
      </SignIn>
    </MainNav>
  );
}

export default Header;
