import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Sidebar from '../../../components/sidebar';

export default function CadastroPet() {
  const [animal, setAnimal] = useState({
    id_usuario: '',
    nome: '',
    deficiencias: '',
    intolerancias: '',
    data_nascimento: '',
    sexo: ''
  });

  const [foto, setFoto] = useState(null);
  const [usuarioValido, setUsuarioValido] = useState(true);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const res = await axios.get('http://localhost:2025/usuarios');
        setUsuarios(res.data);
      } catch (err) {
        console.error('Erro ao carregar usuários:', err);
      }
    };
    fetchUsuarios();
  }, []);

  const verificarUsuario = async (id) => {
    try {
      const res = await axios.get(`http://localhost:2025/cadastro/${id}`);
      setUsuarioValido(!!res.data);
    } catch {
      setUsuarioValido(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimal((prev) => ({ ...prev, [name]: value }));

    if (name === 'id_usuario') {
      verificarUsuario(value);
    }
  };

  const handleFotoChange = (e) => {
    setFoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!usuarioValido) {
      alert('Erro: usuário não cadastrado!');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('id_usuario', animal.id_usuario);
      formData.append('nome', animal.nome);
      formData.append('deficiencias', animal.deficiencias);
      formData.append('intolerancias', animal.intolerancias);
      formData.append('data_nascimento', animal.data_nascimento);
      formData.append('sexo', animal.sexo);

      if (foto) {
        formData.append('imagem', foto);
      }

      const { data } = await axios.post('http://localhost:2025/cadastroAnimal', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Animal cadastrado com sucesso!');

      setAnimal({
        id_usuario: '',
        nome: '',
        deficiencias: '',
        intolerancias: '',
        data_nascimento: '',
        sexo: ''
      });
      setFoto(null);
      setUsuarioValido(true);
    } catch (err) {
      console.error('Erro ao cadastrar animal:', err);
      alert('Erro ao cadastrar o animal.');
    }
  };

  return (
    <div className="novo-animal-container">
      <Sidebar />
      <div className="form-section">
        <h1>Novo animal</h1>
        <form className="form-animal" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="input-group">
            <label>ID do Usuário</label>
            <input
              type="number"
              name="id_usuario"
              value={animal.id_usuario}
              onChange={handleChange}
              placeholder="Digite o ID do Usuário"
              className={!usuarioValido ? 'input-error' : ''}
              required
            />
            {!usuarioValido && (
              <span className="error-text">Usuário não cadastrado</span>
            )}
            <div className="user-list">
              <p>Usuários cadastrados:</p>
              <ul>
                {usuarios.map((usuario) => (
                  <li key={usuario.Id}>
                    {usuario.Id} - {usuario.Nome}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="input-group">
            <label>Nome do animal</label>
            <input
              type="text"
              name="nome"
              value={animal.nome}
              onChange={handleChange}
              placeholder="Nome do animal"
              required
            />
          </div>

          <div className="input-group">
            <label>Deficiências</label>
            <input
              type="text"
              name="deficiencias"
              value={animal.deficiencias}
              onChange={handleChange}
              placeholder="Descreva deficiências (se houver)"
            />
          </div>

          <div className="input-group">
            <label>Intolerâncias</label>
            <input
              type="text"
              name="intolerancias"
              value={animal.intolerancias}
              onChange={handleChange}
              placeholder="Descreva intolerâncias (se houver)"
            />
          </div>

          <div className="row-group">
            <div className="input-group">
              <label>Data de nascimento</label>
              <input
                type="date"
                name="data_nascimento"
                value={animal.data_nascimento}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Sexo</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="sexo"
                    value="M"
                    checked={animal.sexo === 'M'}
                    onChange={handleChange}
                    required
                  /> Masculino
                </label>
                <label>
                  <input
                    type="radio"
                    name="sexo"
                    value="F"
                    checked={animal.sexo === 'F'}
                    onChange={handleChange}
                    required
                  /> Feminino
                </label>
              </div>
            </div>
          </div>

          <div className="input-group">
            <label>Foto do animal</label>
            <input
              type="file"
              accept="image/*"
              id="imagem"
              onChange={handleFotoChange}
              required
            />
          </div>

          <button type="submit" className="save-btn">Salvar</button>
        </form>
      </div>
    </div>
  );
}
