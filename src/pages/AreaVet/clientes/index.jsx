import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import logo from '../../../img/logologin.png';
import { useNavigate } from 'react-router-dom';

export default function Pets() {
  const [animais, setAnimais] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchId, setSearchId] = useState('');
  const [filteredAnimais, setFilteredAnimais] = useState([]);
  const [filterMessage, setFilterMessage] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2025/cadastro');
        if (response.data && Array.isArray(response.data)) {
          setAnimais(response.data);
          setFilteredAnimais(response.data);
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
    const results = animais.filter(animal =>
      animal.Id.toString().includes(searchId)
    );
    setFilteredAnimais(results);
    setFilterMessage(`Resultados filtrados para ID: ${searchId}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:2025/cadastro/${id}`);
      const updatedList = animais.filter(animal => animal.Id !== id);
      setAnimais(updatedList);
      setFilteredAnimais(updatedList);
      setDeleteMessage('Cadastro excluído com sucesso!');
    } catch (err) {
      console.error('Erro ao excluir cadastro:', err);
      setError('Não foi possível excluir o cadastro');
    }
  };

  const handleClearFilter = () => {
    setSearchId('');
    setFilteredAnimais(animais);
    setFilterMessage('');
  };

  const handleCreateNew = () => {
    navigate('/cadastrocliente');
  };

  const handleGoBack = () => {
    navigate('/dashboard');
  };

  const handleEdit = (animal) => {
    navigate(`/AlterarCadastroCliente/${animal.Id}`);
  };

  if (loading) return <div className="dashboard-container">Carregando...</div>;
  if (error) return <div className="dashboard-container">Erro: {error}</div>;

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
          {filterMessage && <p className="filter-message">{filterMessage}</p>}
        </div>

        {filterMessage && (
          <div className="clear-filter">
            <button onClick={handleClearFilter}>Limpar Filtro</button>
          </div>
        )}

        {deleteMessage && <div className="delete-message">{deleteMessage}</div>}

        <div className="stats">
          <div className="stat-card">
            <h2>{filteredAnimais.length}</h2>
            <p>Usuários cadastrados</p>
          </div>
        </div>

        <div className="action-buttons">
          <button onClick={handleCreateNew}>Criar Novo</button>
          <button onClick={handleGoBack}>Voltar ao Menu Inicial</button>
        </div>

        <div className="cards-container">
          {filteredAnimais.map((animal, index) => (
            <div className="animal-card" key={index}>
              <div className="card-header">
                <div className="avatar">🐶</div>
                <div className="info">
                  <strong>{animal.Nome || 'Nome não informado'}</strong>
                </div>
              </div>
              <div className="card-body">
                <p><strong>ID:</strong> {animal.Id}</p>
                <p><strong>CPF:</strong> {animal.Cpf}</p>
                <p><strong>Celular:</strong> {animal.Celular}</p>
                <p><strong>Data de Nascimento:</strong> {new Date(animal.Nascimento).toLocaleDateString()}</p>
                <p><strong>Endereço:</strong> {animal.Endereço}</p>
                <p><strong>Cidade:</strong> {animal.Cidade}</p>
                <p><strong>Estado:</strong> {animal.Estado}</p>
                <p><strong>CEP:</strong> {animal.Cep}</p>
                <div className="action-buttons-card">
                  <button onClick={() => handleEdit(animal)}>Alterar</button>
                  <button onClick={() => handleDelete(animal.Id)}>Excluir</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
