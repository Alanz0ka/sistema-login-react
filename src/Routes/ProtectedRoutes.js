import React from 'react';
import { Navigate } from 'react-router-dom'; // Importe Navigate
import UserServices from '../Services/UserService';

const userService = new UserServices();

const ProtectedRoutes = ({ children }) => {
  const usuarioAutenticado = userService.usuarioAutenticado();

  // Se o usuário estiver autenticado, renderize os filhos (children) normalmente
  // Caso contrário, mostre um alerta e redirecione para a página de login
  if (!usuarioAutenticado) {
    alert("Você não está autenticado. Por favor, faça login para acessar esta página.");
    return <Navigate to="/" replace />; // Redireciona para a página de login
  }

  return children;
};

export default ProtectedRoutes;
