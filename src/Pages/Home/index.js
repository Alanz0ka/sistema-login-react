import React from 'react';
import { Container, SubContainerHome } from './styles';
import { useNavigate } from 'react-router-dom';
import UserService from '../../Services/UserService';
import Botao from '../../Components/Botao';

const Home = () => {
    const navigate = useNavigate();
    const userService = new UserService();

    const handleLogout = async() => {
        await userService.logout();
        alert("Você foi deslogado, irá ser redirecionado para o login")
        navigate("/login")
    }
    return (
        <SubContainerHome>
            <h1>Bem-vindo à página Home!</h1>
            <Botao
            type="submit"
            text="Logout"
            onClick={handleLogout}
            />
        </SubContainerHome>
    );
}
 
export default Home;