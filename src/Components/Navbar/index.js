import styled from 'styled-components';
import UserService from '../../Services/UserService';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import logoImg from "../../assets/img/LogoAlan.png";

const userService = new UserService();

const NavContainer = styled.div`
  display: flex;
  width: 65%;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const Logo = styled.img`
  width: 45px;
`

const LogoutButton = styled.button`
  border: none;
  cursor: pointer;
  color: #EEEEEE;
  font-weight: bold;
  background-color: transparent;
  &:hover {
    color: #BDBDBD;
  }
`

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    userService.logout(navigate);
  }

  return (
    <NavContainer>
      <Logo src={logoImg} alt="logo"/>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </NavContainer>
  )
};

export default Navbar;