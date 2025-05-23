import React from 'react';
import { useNavigate } from 'react-router-dom';  // Para navegação
import './Header1.css';  // Importando o CSS para o componente

const Header1 = () => {
  const navigate = useNavigate();  // Inicializando o hook de navegação

  return (
    <div className="header">
      <h1>Serviço Animal</h1>  {/* Título do cabeçalho */}
      <div className="nav-buttons">
        <button onClick={() => navigate('/dashboard')}>Dashboard</button>
        <button onClick={() => navigate('/cadastropet')}>Cadastro Pet</button>
        <button onClick={() => navigate('/clientes')}>Clientes</button>
        <button onClick={() => navigate('/logout')}>Sair</button>
      </div>
    </div>
  );
};

export default Header1;
