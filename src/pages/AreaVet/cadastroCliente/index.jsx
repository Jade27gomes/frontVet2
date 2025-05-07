import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../../img/logologin.png';
import { FiLogOut } from 'react-icons/fi';
import './index.css';

const BASE_URL = 'http://localhost:2025/cadastro';

export default function Cadastro() {
  const [idBusca, setIdBusca] = useState('');
  const [usuarioUnico, setUsuarioUnico] = useState(null);
  const [clientes, setClientes] = useState([]);

  const [novoCliente, setNovoCliente] = useState({
    a_login: '',
    b_senha: '',
    c_nome: '',
    d_cpf: '',
    e_celular: '',
    f_data_nascimento: '',
    g_endereco: '',
    h_cidade: '',
    i_estado: '',
    j_cep: ''
  });

  const today = new Date().toLocaleDateString('pt-BR');

  const listarUsuarios = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setClientes(res.data);
    } catch (error) {
      console.error("Erro ao listar usuários:", error);
      alert('Erro ao listar usuários');
    }
  };

  const buscarPorId = async () => {
    if (!idBusca) return;

    try {
      const res = await axios.get(`${BASE_URL}/${idBusca}`);
      if (res.data && Object.keys(res.data).length > 0) {
        setUsuarioUnico(res.data);
      } else {
        alert('Usuário não encontrado');
        setUsuarioUnico(null);
      }
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      alert('Erro ao buscar usuário');
      setUsuarioUnico(null);
    }
  };

  const validarCampos = () => {
    const cpfRegex = /^\d{11}$/;
    const celularRegex = /^\d{10,11}$/;

    if (!cpfRegex.test(novoCliente.d_cpf)) {
      alert('CPF inválido. Use apenas números (11 dígitos).');
      return false;
    }

    if (!celularRegex.test(novoCliente.e_celular)) {
      alert('Celular inválido. Use apenas números com DDD.');
      return false;
    }

    return true;
  };

  const criarCliente = async (e) => {
    e.preventDefault();
    if (!validarCampos()) return;

    // Mapeando os campos para o formato que o backend espera
    const payload = {
      login: novoCliente.a_login,
      senha: novoCliente.b_senha,
      nome: novoCliente.c_nome,
      cpf: novoCliente.d_cpf,
      celular: novoCliente.e_celular,
      data_nascimento: novoCliente.f_data_nascimento,
      endereco: novoCliente.g_endereco,
      cidade: novoCliente.h_cidade,
      estado: novoCliente.i_estado,
      cep: novoCliente.j_cep
    };

    try {
      await axios.post(BASE_URL, payload);
      alert('Cliente criado com sucesso!');
      setNovoCliente({
        a_login: '',
        b_senha: '',
        c_nome: '',
        d_cpf: '',
        e_celular: '',
        f_data_nascimento: '',
        g_endereco: '',
        h_cidade: '',
        i_estado: '',
        j_cep: ''
      });
      listarUsuarios();
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      alert('Erro ao criar cliente. Tente novamente.');
    }
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <img src={logo} alt="Logo Dog" className="logo" />
        <h2 className="logo-title">Dog’s</h2>
        <nav>
          <ul>
            <li>📋 Dashboard</li>
            <li className="active">👤 Clientes</li>
            <li>🧳 Serviços</li>
            <li>🐾 Animais</li>
          </ul>
        </nav>
        <button className="logout-btn">Sair <FiLogOut /></button>
      </aside>

      <main className="main-content">
        <div className="date-display">{today}</div>

        <div className="form-container">
          <div className="form-header">
            <h2>Novo cliente</h2>
          </div>

          <form className="client-form" onSubmit={criarCliente}>
            <label>
              Login
              <input 
                type="text" 
                placeholder="Login" 
                value={novoCliente.a_login}
                onChange={(e) => setNovoCliente({ ...novoCliente, a_login: e.target.value })}
                required
              />
            </label>

            <label className="campo-senha">
  Senha
  <input 
    type="password" 
    placeholder="Senha" 
    value={novoCliente.b_senha}
    onChange={(e) => setNovoCliente({ ...novoCliente, b_senha: e.target.value })}
    required
  />
</label>


            <label>
              Nome
              <input 
                type="text" 
                placeholder="Nome" 
                value={novoCliente.c_nome}
                onChange={(e) => setNovoCliente({ ...novoCliente, c_nome: e.target.value })}
                required
              />
            </label>

            <label>
              CPF
              <input 
                type="text" 
                placeholder="CPF" 
                value={novoCliente.d_cpf}
                onChange={(e) => setNovoCliente({ ...novoCliente, d_cpf: e.target.value })}
                required
              />
            </label>

            <div className="inline-group">
              <label>
                Celular
                <input 
                  type="text" 
                  placeholder="Celular" 
                  value={novoCliente.e_celular}
                  onChange={(e) => setNovoCliente({ ...novoCliente, e_celular: e.target.value })}
                  required
                />
              </label>

              <label>
                Data de nasc.
                <input 
                  type="date" 
                  value={novoCliente.f_data_nascimento}
                  onChange={(e) => setNovoCliente({ ...novoCliente, f_data_nascimento: e.target.value })}
                  required
                />
              </label>
            </div>

            <label>
              Endereço
              <input 
                type="text" 
                placeholder="Endereço" 
                value={novoCliente.g_endereco}
                onChange={(e) => setNovoCliente({ ...novoCliente, g_endereco: e.target.value })}
                required
              />
            </label>

            <div className="inline-group">
              <label>
                Cidade
                <input 
                  type="text" 
                  placeholder="Cidade" 
                  value={novoCliente.h_cidade}
                  onChange={(e) => setNovoCliente({ ...novoCliente, h_cidade: e.target.value })}
                  required
                />
              </label>

              <label>
                Estado
                <input 
                  type="text" 
                  placeholder="Estado (ex: SP)" 
                  value={novoCliente.i_estado}
                  onChange={(e) => setNovoCliente({ ...novoCliente, i_estado: e.target.value })}
                  required
                />
              </label>
            </div>

            <label>
              CEP
              <input 
                type="text" 
                placeholder="CEP" 
                value={novoCliente.j_cep}
                onChange={(e) => setNovoCliente({ ...novoCliente, j_cep: e.target.value })}
                required
              />
            </label>

            <button type="submit" className="save-button">Salvar</button>
          </form>
        </div>

        <div className="search-container">
          <h2>Buscar por ID</h2>
          <input 
            type="number" 
            placeholder="ID do usuário" 
            value={idBusca} 
            onChange={(e) => setIdBusca(e.target.value)} 
          />
          <button onClick={buscarPorId}>Buscar</button>

          {usuarioUnico ? (
            <pre>{JSON.stringify(usuarioUnico, null, 2)}</pre>
          ) : (
            <p>Nenhum usuário encontrado.</p>
          )}
        </div>

        <div className="user-list">
          <h2>Listar Usuários</h2>
          <button onClick={listarUsuarios}>Listar Todos</button>
          {clientes.length > 0 ? (
            <pre>{JSON.stringify(clientes, null, 2)}</pre>
          ) : (
            <p>Nenhum usuário listado.</p>
          )}
        </div>
      </main>
    </div>
  );
}