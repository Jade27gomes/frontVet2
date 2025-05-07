import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import Sidebar from '../../../components/sidebar';

export default function Dashboard() {
  const [atendimentos, setAtendimentos] = useState([]);
  const [animais, setAnimais] = useState([]);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Buscar atendimentos
    axios.get('http://localhost:2025/cadastroatendimento')
      .then(res => setAtendimentos(res.data))
      .catch(err => console.error('Erro ao buscar atendimentos', err));

    // Buscar animais
    axios.get('http://localhost:2025/cadastroAnimal')
      .then(res => setAnimais(res.data))
      .catch(err => console.error('Erro ao buscar animais', err));

    // Buscar usuários (clientes)
    axios.get('http://localhost:2025/cadastro')
      .then(res => setClientes(res.data))
      .catch(err => console.error('Erro ao buscar clientes', err));
  }, []);

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString();
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="main-content">
        <div className="header">
          <span className="date">{new Date().toLocaleDateString()}</span>
          <h1>Dashboard</h1>
        </div>

        <div className="stats">
          <div className="stat-card">
            <h2>{atendimentos.length}</h2>
            <p>Pets agendados</p>
          </div>
          <div className="stat-card">
            <h2>{atendimentos.filter(a => a.status === 'concluido').length}</h2>
            <p>Pets atendidos</p>
          </div>
          <div className="stat-card">
            <h2>{clientes.length}</h2>
            <p>Clientes totais</p>
          </div>
        </div>

        <div className="cards-container">
          {atendimentos.map((atendimento, index) => {
            const animal = animais.find(a => a.id === atendimento.id_animal);
            const cliente = clientes.find(c => c.id === atendimento.id_usuario);

            return (
              <div className="animal-card" key={index}>
                <div className="card-header">
                  <div className="avatar">🐾</div>
                  <div className="info">
                    <strong>{animal?.nome || 'Animal desconhecido'}</strong><br />
                    <span>{cliente?.nome || 'Dono desconhecido'}</span>
                  </div>
                  <div className="price">R$ {Number(atendimento.preco).toFixed(2)}</div>
                  <div className={`status-dot blue`} />
                </div>
                <div className="card-body">
                  <p>
                    <strong>Data:</strong> {formatarData(atendimento.data_agendada)} <strong>Hora:</strong> {atendimento.hora_agendada}
                  </p>
                  <p><strong>Procedimento:</strong> {atendimento.descricao}</p>
                  <p><strong>Status:</strong> <span className="status">Em aberto</span></p>
                  <p><strong>Dono:</strong> {cliente?.nome || 'Não informado'}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}