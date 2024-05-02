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
                localStorage.setItem("token", data.token.token);
                return true;
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
        return false; // Retorna false em caso de erro
    }

    usuarioAutenticado() {
        return localStorage.getItem("token") !== undefined ? true : false
    }
}
