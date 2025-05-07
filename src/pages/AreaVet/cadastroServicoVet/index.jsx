import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function CadastroAtendimento() {
  const { animalId } = useParams();

  const [formData, setFormData] = useState({
    id_animal: animalId || '',
    id_usuario: 27, // ← Substitua isso pela lógica de usuário logado, se houver
    descricao: '',
    atendimento_horas: '',
    hora_agendada: '',
    data_agendada: '',
    preco: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.id_animal) newErrors.id_animal = 'ID do animal é obrigatório.';
    if (!formData.id_usuario) newErrors.id_usuario = 'ID do usuário é obrigatório.';
    if (!formData.descricao) newErrors.descricao = 'Descrição é obrigatória.';
    if (!formData.atendimento_horas) newErrors.atendimento_horas = 'Duração do atendimento é obrigatória.';
    
    // Validação para hora e data
    if (!formData.hora_agendada) newErrors.hora_agendada = 'Hora agendada é obrigatória.';
    else if (!/^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/.test(formData.hora_agendada)) {
      newErrors.hora_agendada = 'Hora agendada no formato inválido.';
    }

    if (!formData.data_agendada) newErrors.data_agendada = 'Data agendada é obrigatória.';
    else if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.data_agendada)) {
      newErrors.data_agendada = 'Data agendada no formato inválido.';
    }

    if (!formData.preco) newErrors.preco = 'Preço é obrigatório.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // Convertendo a data e hora para o formato que você deseja no backend, se necessário
      const formattedDataAgendada = new Date(formData.data_agendada).toISOString(); // Exemplo de formatação
      const formattedHoraAgendada = formData.hora_agendada + ":00"; // Ajuste conforme necessário, ex: adicionando os segundos

      const response = await axios.post('http://localhost:2025/cadastroatendimento', {
        ...formData,
        id_animal: Number(formData.id_animal),
        id_usuario: Number(formData.id_usuario),
        atendimento_horas: Number(formData.atendimento_horas),
        preco: parseFloat(formData.preco),
        data_agendada: formattedDataAgendada,
        hora_agendada: formattedHoraAgendada,
      });

      alert('Atendimento cadastrado com sucesso!');
      console.log(response.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert('Erro ao cadastrar atendimento.');
    }
  };

  return (
    <div className="novo-animal-container">
      <div className="form-section">
        <form className="form-animal" onSubmit={handleSubmit}>
          <h2>Cadastro de Atendimento</h2>

          <div className="input-group">
            <label htmlFor="id_animal">ID do Animal</label>
            <input
              type="text"
              name="id_animal"
              value={formData.id_animal}
              onChange={handleChange}
              readOnly={!!animalId}
              className={errors.id_animal ? 'input-error' : ''}
            />
            {errors.id_animal && <span className="error-text">{errors.id_animal}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="descricao">Descrição</label>
            <input
              type="text"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              className={errors.descricao ? 'input-error' : ''}
            />
            {errors.descricao && <span className="error-text">{errors.descricao}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="atendimento_horas">Horas de Atendimento</label>
            <input
              type="number"
              name="atendimento_horas"
              value={formData.atendimento_horas}
              onChange={handleChange}
              className={errors.atendimento_horas ? 'input-error' : ''}
            />
            {errors.atendimento_horas && <span className="error-text">{errors.atendimento_horas}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="hora_agendada">Hora Agendada</label>
            <input
              type="time"
              name="hora_agendada"
              value={formData.hora_agendada}
              onChange={handleChange}
              className={errors.hora_agendada ? 'input-error' : ''}
            />
            {errors.hora_agendada && <span className="error-text">{errors.hora_agendada}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="data_agendada">Data Agendada</label>
            <input
              type="date"
              name="data_agendada"
              value={formData.data_agendada}
              onChange={handleChange}
              className={errors.data_agendada ? 'input-error' : ''}
            />
            {errors.data_agendada && <span className="error-text">{errors.data_agendada}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="preco">Preço</label>
            <input
              type="number"
              name="preco"
              step="0.01"
              value={formData.preco}
              onChange={handleChange}
              className={errors.preco ? 'input-error' : ''}
            />
            {errors.preco && <span className="error-text">{errors.preco}</span>}
          </div>

          <button type="submit" className="save-btn">Salvar Atendimento</button>
        </form>
      </div>
    </div>
  );
}
