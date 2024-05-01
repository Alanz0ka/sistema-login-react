import React from 'react';
import { Container, Form } from './styles';
import Input from '../../Components/input/index';
import Botao from '../../Components/Botao';


const Login = () => {
    const handleChange = (event)=>{
        console.log("Digitando...", event.target.name ,event.target.value)
    }

    return ( 
        <Container>
           <Form>
           <h1>Faça o seu login 👋</h1>
           <Input
             name="password"
             placeholder="Digite Sua Senha"
             onChange={handleChange}
             type="password"
           />
           <Input
             name="password"
             placeholder="Digite Sua Senha"
             onChange={handleChange}
             type="password"
           />
           <Botao/>
            
            <div>
                <p>Não possui conta?</p>
                <a>Cadastrar</a>
            </div>
           </Form>
        </Container>
     )
}
 
export default Login;