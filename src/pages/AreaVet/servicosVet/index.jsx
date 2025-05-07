import React from "react";
import "./index.css";
import logo from '../../../img/logologin.png';

export default function ServicoAnimal() {
  return (
    <div className="container-servico">
      <aside className="sidebar">
        <img src={logo} alt="Logo Dog" className="logo" />
        <h2 className="logo-title">Dog’s</h2>
        <nav>
          <ul>
            <li>📋 Dashboard</li>
            <li>👤 Clientes</li>
            <li className="active">🧳 Serviços</li>
            <li>🐾 Animais</li>
          </ul>
        </nav>
        <button className="logout-btn">Sair ⮕</button>
      </aside>

      <main className="main-content">
        <div className="header">
          <span className="data">18/04/2023</span>
          <h1>Serviços</h1>
          <div className="search-bar">
            <input type="text" placeholder="Ellie" />
            <button>🔍 Pesquisar</button>
          </div>
        </div>

        <p className="resultado-texto">5 resultados</p>

        <div className="card-servico em-andamento">
          <div className="card-header">
            <p><strong>Nome do animal</strong><br />Nome do dono</p>
            <span className="preco">R$ 75,00 <span className="dot laranja" /></span>
          </div>
          <div className="info">
            <p><strong>Animal:</strong> Gato &nbsp; <strong>Sexo:</strong> Masculino &nbsp; <strong>Idade:</strong> 8 anos</p>
            <p>Procedimento feito Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <p><strong>Status:</strong> <span className="status-em-andamento">em andamento</span></p>
            <p><strong>Dono:</strong> <span className="status-aguardando">Aguardando</span></p>
            <p>Sem agendamento</p>
            <p><strong>Contato:</strong> (13) 9684-4814</p>
          </div>
        </div>

        <div className="card-servico concluido">
          <div className="card-header">
            <p><strong>Nome do animal</strong><br />Nome do dono</p>
            <span className="preco">R$ 95,00 <span className="dot verde" /></span>
          </div>
          <div className="info">
            <p><strong>Animal:</strong> Gato &nbsp; <strong>Sexo:</strong> Masculino &nbsp; <strong>Idade:</strong> 8 anos</p>
            <p>Procedimento feito Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <p><strong>Status:</strong> <span className="status-concluido">Concluído</span></p>
            <p><strong>Dono:</strong> <span className="status-caminho">A caminho</span></p>
            <p>18h - 19h</p>
            <p><strong>Contato:</strong> (13) 9684-4814</p>
          </div>
        </div>

        <div className="card-servico finalizado">
          <div className="card-header">
            <p><strong>Nome do animal</strong><br />Nome do dono</p>
            <span className="preco">R$ 250,00 <span className="dot azul" /></span>
          </div>
          <div className="info">
            <p><strong>Animal:</strong> Gato &nbsp; <strong>Sexo:</strong> Masculino &nbsp; <strong>Idade:</strong> 8 anos</p>
            <p>Procedimento feito Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <p><strong>Status:</strong> <span className="status-finalizado">Finalizado</span></p>
            <p><strong>Contato:</strong> (13) 9684-4814</p>
          </div>
        </div>

        <button className="adicionar-btn">➕ Adicionar</button>
      </main>
    </div>
  );
}
