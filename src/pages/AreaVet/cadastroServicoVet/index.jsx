import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './index.css'; // Você pode criar esse arquivo com o CSS abaixo

export default function CadastroAtendimento() {
  const { animalId } = useParams();

  const [formData, setFormData] = useState({
    id_animal: animalId || '',
    id_usuario: '',
    descricao: '',
    atendimento_horas: '',
    hora_agendada: '',
    data_agendada: '',
    preco: ''
  });

  const [usuarios, setUsuarios] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    async function buscarUsuarios() {
      try {
        const resp = await axios.get('http://localhost:2025/cadastrousuarios');
        setUsuarios(resp.data);
      } catch (err) {
        console.error('Erro ao buscar usuários:', err);
      }
    }
    buscarUsuarios();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.id_animal) newErrors.id_animal = 'ID do animal é obrigatório.';
    if (!formData.id_usuario) newErrors.id_usuario = 'Usuário é obrigatório.';
    if (!formData.descricao) newErrors.descricao = 'Descrição é obrigatória.';
    if (!formData.atendimento_horas) newErrors.atendimento_horas = 'Horas de atendimento obrigatória.';
    if (!formData.hora_agendada) newErrors.hora_agendada = 'Hora agendada obrigatória.';
    if (!formData.data_agendada) newErrors.data_agendada = 'Data agendada obrigatória.';
    if (!formData.preco) newErrors.preco = 'Preço obrigatório.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:2025/cadastroAtendimento', {
        id_animal: Number(formData.id_animal),
        id_usuario: Number(formData.id_usuario),
        descricao: formData.descricao,
        atendimento_horas: Number(formData.atendimento_horas),
        hora_agendada: formData.hora_agendada,
        data_agendada: formData.data_agendada,
        preco: parseFloat(formData.preco)
      });

      alert('Atendimento cadastrado com sucesso!');
      setFormData({
        id_animal: animalId || '',
        id_usuario: '',
        descricao: '',
        atendimento_horas: '',
        hora_agendada: '',
        data_agendada: '',
        preco: ''
      });
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert('Erro ao cadastrar atendimento.');
    }
  };

  return (
    <div className="atendimento-container">
      <form onSubmit={handleSubmit}>
        <h2>Cadastrar Atendimento</h2>

        <label>ID do Animal</label>
        <input
          type="text"
          name="id_animal"
          value={formData.id_animal}
          onChange={handleChange}
          readOnly={!!animalId}
          className={errors.id_animal ? 'input-error' : ''}
        />
        {errors.id_animal && <span className="error-text">{errors.id_animal}</span>}

        <label>Usuário Responsável (ID)</label>
<input
  type="text"
  name="id_usuario"
  value={formData.id_usuario}
  onChange={handleChange}
  className={errors.id_usuario ? 'input-error' : ''}
/>
{errors.id_usuario && <span className="error-text">{errors.id_usuario}</span>}


        <label>Descrição</label>
        <input
          type="text"
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          className={errors.descricao ? 'input-error' : ''}
        />
        {errors.descricao && <span className="error-text">{errors.descricao}</span>}

        <label>Horas de Atendimento</label>
        <input
          type="number"
          name="atendimento_horas"
          value={formData.atendimento_horas}
          onChange={handleChange}
          className={errors.atendimento_horas ? 'input-error' : ''}
        />
        {errors.atendimento_horas && <span className="error-text">{errors.atendimento_horas}</span>}

        <label>Hora Agendada</label>
        <input
          type="time"
          name="hora_agendada"
          value={formData.hora_agendada}
          onChange={handleChange}
          className={errors.hora_agendada ? 'input-error' : ''}
        />
        {errors.hora_agendada && <span className="error-text">{errors.hora_agendada}</span>}

        <label>Data Agendada</label>
        <input
          type="date"
          name="data_agendada"
          value={formData.data_agendada}
          onChange={handleChange}
          className={errors.data_agendada ? 'input-error' : ''}
        />
        {errors.data_agendada && <span className="error-text">{errors.data_agendada}</span>}

        <label>Preço (R$)</label>
        <input
          type="number"
          step="0.01"
          name="preco"
          value={formData.preco}
          onChange={handleChange}
          className={errors.preco ? 'input-error' : ''}
        />
        {errors.preco && <span className="error-text">{errors.preco}</span>}

        <button type="submit">Salvar Atendimento</button>
      </form>
    </div>
  );
}
