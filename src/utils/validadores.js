const validarEmail = (email) => {
    return email?.toString().includes("@") && email?.includes(".")
}

const validarSenha = (senha) =>{
    return senha?.toString().length > 6
}

export {
    validarEmail,
    validarSenha,
}