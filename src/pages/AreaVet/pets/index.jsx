import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { useNavigate } from 'react-router-dom'; // Importação do hook useNavigate

export default function Pets() {
  const [animais, setAnimais] = useState([]);
  const [filteredAnimais, setFilteredAnimais] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchId, setSearchId] = useState('');
  const navigate = useNavigate(); // Inicializando o useNavigate para navegação

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2025/cadastroAnimal');
        
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
      animal.id_novoAnimal.toString().includes(searchId)
    );
    setFilteredAnimais(results);
  };

  const handleClear = () => {
    setSearchId(''); // Limpa o campo de busca
    setFilteredAnimais(animais); // Restaura todos os animais
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:2025/cadastroAnimal/${id}`);
      setAnimais(animais.filter(animal => animal.id_novoAnimal !== id));
      setFilteredAnimais(filteredAnimais.filter(animal => animal.id_novoAnimal !== id));
    } catch (err) {
      console.error('Erro ao excluir animal:', err);
      setError('Não foi possível excluir o cadastro');
    }
  };

  const handleCreateNew = () => {
    navigate('/cadastropet');
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
          <button onClick={handleClear}>Limpar</button> {/* Botão de limpar */}
        </div>

        <div className="action-buttons">
          <button onClick={handleCreateNew}>Criar Novo</button>
          <button onClick={handleGoBack}>Voltar ao Menu Inicial</button>
        </div>

        <div className="stats">
          <div className="stat-card">
            <h2>{filteredAnimais.length}</h2>
            <p>Pets cadastrados</p>
          </div>
        </div>

        <div className="cards-container">
          {filteredAnimais.map((animal) => (
            <div className="animal-card" key={animal.id_novoAnimal}>
              <div className="card-header">
                <div className="avatar">🐶</div>
                <div className="info">
                  <strong>{animal.nome || 'Nome não informado'}</strong>
                </div>
              </div>
              <div className="card-body">
                <p><strong>ID:</strong> {animal.id_novoAnimal}</p>
                {animal.deficiencias && <p><strong>Deficiências:</strong> {animal.deficiencias}</p>}
                {animal.intolerancias && <p><strong>Intolerâncias:</strong> {animal.intolerancias}</p>}
                {animal.nascimento && <p><strong>Data de Nascimento:</strong> {animal.nascimento}</p>}
                {animal.sexo && <p><strong>Sexo:</strong> {animal.sexo}</p>}
                <button onClick={() => handleDelete(animal.id_novoAnimal)}>Excluir</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
