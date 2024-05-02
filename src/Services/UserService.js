import axios from "axios";

export default class UserService {
    constructor() {
        this.axios = axios.create({
            baseURL: process.env.REACT_APP_LOGIN_API,
            // withCredentials: true
        });
    }

    async login(dados) {
        try {
            const { data } = await this.axios.post("auth/login", dados);

            if (data) {
                localStorage.setItem("nome", data.user.nome);
                localStorage.setItem("email", data.user.email);
                localStorage.setItem("token", data.token);
                console.log(data)
                return true;
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
        return false; // Retorna false em caso de erro
    }

    async cadastrar(dados){
        return this.axios.post("/usuarios/cadastro", dados)
    }

    usuarioAutenticado() {
        const token = localStorage.getItem("token");
        console.log(token); // Para debug, verificar se o token está sendo recuperado corretamente
        return token !== null; // Retorna true se o token existir, caso contrário, retorna false
    }

    async logout(){
        localStorage.clear()
    }
}
