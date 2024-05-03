import styled from 'styled-components';
import UserService from '../../Services/UserService';
import React from 'react';

const userService = new UserService();

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

  const Logo = styled.img`
  width: 100px;
  `
const LogoutButton = styled.button`
    background-color: #f5f5f5;
    border: none;
    cursor: pointer;
    padding: 10px;
    &:hover {
        background-color: #e5e5e5;
    }`

export default class Navbar extends React.Component {
    render() {
        return (
            <NavContainer>
                <Logo src="https://i.imgur.com/6f1b5Ue.png" alt="logo"/>
                <LogoutButton onClick={() => userService.logout}>Logout</LogoutButton>
            </NavContainer>
        )
    }
};
  