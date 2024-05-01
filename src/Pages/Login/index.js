import React, {useState} from 'react';
import { Container, Form } from './styles';
import Input from '../../Components/input/index';
import Botao from '../../Components/Botao';
import { validarEmail, validarSenha } from '../../utils/validadores';

const Login = () => {
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            setLoading(true)
            alert("Login")
            setLoading(false)
        }
        catch(err){
            alert("Algo deu errado com o Login"+ err)
        }
    }

    const handleChange = (event)=>{
        console.log("Digitando...", event.target.name ,event.target.value)
        setForm({...form, [event.target.name]: event.target.value})
        console.log(`Form: ${form}`)
    }

    const validadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.password)
    }

    console.log(validadorInput())

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
             name="password"
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
            
            <div>
                <p>Não possui conta?</p>
                <a>Cadastrar</a>
            </div>
           </Form>
        </Container>
     )
}
 
export default Login;