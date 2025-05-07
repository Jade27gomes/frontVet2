import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import Sidebar from '../../../components/sidebar';

const BASE_URL = 'http://localhost:2025/cadastroatendimento';

export default function ServicoAnimal() {
  const [atendimentos, setAtendimentos] = useState([]);

  const today = new Date().toLocaleDateString('pt-BR');

  useEffect(() => {
    listarAtendimentos();
  }, []);

  const listarAtendimentos = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setAtendimentos(res.data);
    } catch (error) {
      console.error("Erro ao listar atendimentos:", error);
      alert('Erro ao buscar atendimentos');
    }
  };

  return (
    <div className="container-servico">
      <Sidebar />

      <main className="main-content">
        <div className="header">
          <span className="data">{today}</span>
          <h1>Serviços</h1>
          <div className="search-bar">
            <input type="text" placeholder="Pesquisar atendimento..." />
            <button>🔍 Pesquisar</button>
          </div>
        </div>

        <p className="resultado-texto">{atendimentos.length} resultados</p>

        {atendimentos.map((item) => (
          <div key={item.id} className="card-servico em-andamento">
            <div className="card-header">
              <p><strong>Animal ID:</strong> {item.id_animal}<br /><strong>Usuário ID:</strong> {item.id_usuario}</p>
              <span className="preco">R$ {item.preco.toFixed(2)} <span className="dot laranja" /></span>
            </div>
            <div className="info">
              <p><strong>Descrição:</strong> {item.descricao}</p>
              <p><strong>Data:</strong> {item.data_agendada} &nbsp; <strong>Hora:</strong> {item.hora_agendada}</p>
              <p><strong>Duração:</strong> {item.atendimento_horas} hora(s)</p>
              <p><strong>Status:</strong> <span className="status-em-andamento">em andamento</span></p>
              {/* Adapte para incluir nome do animal, dono e contato quando estiverem disponíveis no endpoint */}
            </div>
          </div>
        ))}

        <button className="adicionar-btn">➕ Adicionar</button>
      </main>
    </div>
  );
}
