
import api from "./api";


export default class UserService {

    async login(dados) {
        try {
            const { data } = await api.post("auth/login", dados);
            if (data) {
                localStorage.setItem("nome", data.user.nome);
                localStorage.setItem("email", data.user.email);
                localStorage.setItem("id", data.user.id);
                localStorage.setItem("token", data.token);
                return true;
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
        return false; 
    }

    async cadastrar(dados){
        return api.post("/usuarios/cadastro", dados)
    }

    usuarioAutenticado() {
        const token = localStorage.getItem("token");
        return token !== null; 
    }

    async logout(navigate){
        localStorage.clear();
        navigate("/login");
    }
}
