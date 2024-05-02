import React, { useState } from 'react';
import { Container, Form, SubContainerSign } from './styles';
import Input from '../../Components/input/index';
import Botao from '../../Components/Botao';
import { validarEmail, validarSenha, validarNome, validarConfirmarSenha } from '../../utils/validadores';
import UserService from '../../Services/UserService';
import { NavLink, useNavigate } from 'react-router-dom';

const userService = new UserService();

const Cadastro = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const { data } = await userService.cadastrar({
                nome: form.nome,
                email: form.email,
                senha: form.senha
            });
            if (data) {
                const responseLogin = await userService.login({
                    nome: form.nome,
                    email: form.email,
                    senha: form.senha
                });
                if (responseLogin === true) {
                    alert("Usuário cadastrado com sucesso");
                    navigate("/home");
                }
            }
            setLoading(false);
        } catch (err) {
            alert("Algo deu errado com o Cadastro" + err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const validadorInput = () => {
        return (
            validarEmail(form.email) &&
            validarSenha(form.senha) &&
            validarNome(form.nome) &&
            validarConfirmarSenha(form.senha, form.confirmarSenha)
        );
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Faça o seu Cadastro</h1>
                <Input
                    name="nome"
                    placeholder="Digite Seu nome"
                    onChange={handleChange}
                    type="text"
                />
                <Input
                    name="email"
                    placeholder='Digite seu email'
                    onChange={handleChange}
                    type="email"
                />
                <Input
                    name="senha"
                    placeholder='Digite Sua Senha'
                    onChange={handleChange}
                    type="password"
                />
                <Input
                    name="confirmarSenha"
                    placeholder='Confirme Sua Senha'
                    onChange={handleChange}
                    type="password"
                />
                <Botao
                    type="submit"
                    text="Efetuar Cadastro!"
                    disabled={loading === true || !validadorInput()}
                />

                <SubContainerSign>
                    <p>Já possui conta?</p>
                    <NavLink to="/login">Login</NavLink>
                </SubContainerSign>
            </Form>
        </Container>
    );
};

export default Cadastro;
