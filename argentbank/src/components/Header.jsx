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
const UserSignOut = styled.img`
width:20px;
height:20px;
`;

const SignIn = styled(NavItem)`
  display: flex;
  align-items: center;
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
                <NavItem onClick={handleLogout}>
                    <UserIcon src={userCircleIcon} alt="User Icon" />{
                        user.firstName
                    }
                    <UserSignOut src={arrowRight} alt="Sign Out Icon" />
                    Sign Out
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
