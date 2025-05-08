import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { useNavigate } from 'react-router-dom';

export default function Atendimentos() {
  const [atendimentos, setAtendimentos] = useState([]);
  const [filteredAtendimentos, setFilteredAtendimentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchId, setSearchId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2025/cadastroatendimento');
        
        if (response.data && Array.isArray(response.data)) {
          setAtendimentos(response.data);
          setFilteredAtendimentos(response.data);
        } else {
          throw new Error('Formato de dados inesperado');
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Erro na requisição:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const results = atendimentos.filter(atendimento =>
      atendimento.id.toString().includes(searchId)
    );
    setFilteredAtendimentos(results);
  };

  const handleClear = () => {
    setSearchId('');
    setFilteredAtendimentos(atendimentos);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:2025/cadastroatendimento/${id}`);
      setAtendimentos(atendimentos.filter(atendimento => atendimento.id !== id));
      setFilteredAtendimentos(filteredAtendimentos.filter(atendimento => atendimento.id !== id));
    } catch (err) {
      console.error('Erro ao excluir atendimento:', err);
      setError('Não foi possível excluir o atendimento');
    }
  };

  const handleCreateNew = () => {
    navigate('/cadastroSERVICOVET');
  };

  const handleGoBack = () => {
    navigate('/dashboard'); 
  };

  if (loading) {
    return <div className="dashboard-container">Carregando...</div>;
  }

  if (error) {
    return <div className="dashboard-container">Erro: {error}</div>;
  }

  return (
    <div className="dashboard-container">
      <main className="main-content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquisar por ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          <button onClick={handleSearch}>Pesquisar</button>
          <button onClick={handleClear}>Limpar</button>
        </div>

        <div className="action-buttons">
          <button onClick={handleCreateNew}>Criar Novo Atendimento</button>
          <button onClick={handleGoBack}>Voltar ao Menu Inicial</button>
        </div>

        <div className="stats">
          <div className="stat-card">
            <h2>{filteredAtendimentos.length}</h2>
            <p>Atendimentos cadastrados</p>
          </div>
        </div>

        <div className="cards-container">
          {filteredAtendimentos.map((atendimento) => (
            <div className="atendimento-card" key={atendimento.id}>
              <div className="card-header">
                <div className="info">
                  <strong>{atendimento.descricao || 'Descrição não informada'}</strong>
                </div>
              </div>
              <div className="card-body">
                <p><strong>ID:</strong> {atendimento.id}</p>
                <p><strong>ID Animal:</strong> {atendimento.id_animal}</p>
                <p><strong>ID Usuário:</strong> {atendimento.id_usuario}</p>
                <p><strong>Data Agendada:</strong> {atendimento.data_agendada}</p>
                <p><strong>Hora Agendada:</strong> {atendimento.hora_agendada}</p>
                <p><strong>Preço:</strong> {atendimento.preco}</p>
                <button onClick={() => handleDelete(atendimento.id)}>Excluir</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
