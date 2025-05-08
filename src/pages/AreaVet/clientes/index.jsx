import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import logo from '../../../img/logologin.png';
import { Link, useNavigate } from 'react-router-dom'; // Alteração aqui

export default function Pets() {
  const [animais, setAnimais] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchId, setSearchId] = useState(''); // Estado para armazenar o ID pesquisado
  const [filteredAnimais, setFilteredAnimais] = useState(animais); // Estado para armazenar os animais filtrados
  const [filterMessage, setFilterMessage] = useState(''); // Mensagem de filtro
  const [deleteMessage, setDeleteMessage] = useState(''); // Mensagem de exclusão
  const navigate = useNavigate(); // Alteração aqui

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2025/cadastro');
        
        if (response.data && Array.isArray(response.data)) {
          setAnimais(response.data);
          setFilteredAnimais(response.data); // Inicializa com todos os animais
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
      setAnimais(animais.filter(animal => animal.Id !== id));
      setFilteredAnimais(filteredAnimais.filter(animal => animal.Id !== id));
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
    // Navega para a página de criação de novo animal
    navigate('/cadastrocliente'); // Alteração aqui
  };

  const handleGoBack = () => {
    // Navega de volta para o menu inicial
    navigate('/dashboard'); // Alteração aqui
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
        

        {/* Barra de busca com botão */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquisar por ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)} // Atualiza o estado do ID
          />
          <button onClick={handleSearch}>Pesquisar</button>
          {filterMessage && <p className="filter-message">{filterMessage}</p>}
        </div>

        {/* Botão para limpar filtro */}
        {filterMessage && (
          <div className="clear-filter">
            <button onClick={handleClearFilter}>Limpar Filtro</button>
          </div>
        )}

        {/* Mensagem de exclusão */}
        {deleteMessage && <div className="delete-message">{deleteMessage}</div>}

        <div className="stats">
          <div className="stat-card">
            <h2>{filteredAnimais.length}</h2>
            <p>Usuarios cadastrados</p>
          </div>
        </div>

        {/* Botões de ação */}
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
                <button onClick={() => handleDelete(animal.Id)}>Excluir</button> {/* Botão de excluir */}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
