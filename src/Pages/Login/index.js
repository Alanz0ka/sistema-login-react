import React, {useState} from 'react';
import { Container, Form, SubContainerSign } from './styles';
import Input from '../../Components/input/index';
import Botao from '../../Components/Botao';
import { validarEmail, validarSenha } from '../../utils/validadores';
import UserService from '../../Services/UserService';
import { NavLink, useNavigate } from 'react-router-dom';

const userService = new UserService()

const Login = () => {
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            setLoading(true)
            const response = await userService.login(form)
            console.log(`response do login: ${response}`)
            if(response === true){
                alert("Usuario logado com sucesso")
                navigate("/home")
            }
            setLoading(false)
        }
        catch(err){
            alert("Algo deu errado com o Login"+ err)
        }
    }

    const handleChange = (event)=>{
        setForm({...form, [event.target.name]: event.target.value})

    }

    const validadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.senha)
    }

    // console.log(validadorInput())

    return ( 
        <Container>
           <Form>
           <h1>Faça o seu login 👋</h1>
           <Input
             name="email"
             placeholder="Digite Sua Senha"
             onChange={handleChange}
             type="email"
           />
           <Input
             name="senha"
             placeholder='Digite Sua Senha'
             onChange={handleChange}
             type="password"
           />
           <Botao
            type="submit"
            text="Login"
            onClick={handleSubmit}
            disabled={loading === true || !validadorInput()}
           />
            
            <SubContainerSign>
                <p>Não possui conta?</p>
                <NavLink to="/cadastrar">Cadastrar</NavLink>
            </SubContainerSign>
           </Form>
        </Container>
     )
}
 
export default Login;