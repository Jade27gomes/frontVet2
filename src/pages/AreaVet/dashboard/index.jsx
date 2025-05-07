import React from 'react';
import './index.css';
import logo from '../../../img/logologin.png';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <img src={logo} alt="Logo Dog" className="logo" />
        <h2 className="logo-title">Dog’s</h2>
        <nav>
          <ul>
            <li className="active">📋 Dashboard</li>
            <li>👤 Clientes</li>
            <li>🧳 Serviços</li>
            <li>🐾 Animais</li>
          </ul>
        </nav>
        <button className="logout-btn">Sair ⮕</button>
      </aside>

      <main className="main-content">
        <div className="header">
          <span className="date">18/04/2023</span>
          <h1>Dashboard</h1>
        </div>

        <div className="stats">
          <div className="stat-card">
            <h2>8</h2>
            <p>Pets agendados</p>
          </div>
          <div className="stat-card">
            <h2>4</h2>
            <p>Pets atendidos</p>
          </div>
          <div className="stat-card">
            <h2>82</h2>
            <p>Clientes totais</p>
          </div>
        </div>

        <div className="cards-container">
          {[1, 2, 3].map((_, index) => (
            <div className="animal-card" key={index}>
              <div className="card-header">
                <div className="avatar">🐶</div>
                <div className="info">
                  <strong>Nome do animal</strong><br />
                  <span>Nome do dono</span>
                </div>
                <div className="price">R$ {index === 0 ? '75,00' : index === 1 ? '95,00' : '250,00'}</div>
                <div className={`status-dot ${index === 0 ? 'orange' : index === 1 ? 'green' : 'blue'}`} />
              </div>
              <div className="card-body">
                <p><strong>Animal:</strong> Gato  <strong>Sexo:</strong> Masculino  <strong>Idade:</strong> 8 anos</p>
                <p>
                  Procedimento feito Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales quam sed tortor sodales, vel vestibulum ligula euismod.
                </p>
                <p><strong>Status:</strong> <span className={`status ${index === 0 ? 'pendente' : index === 1 ? 'concluido' : 'finalizado'}`}>
                  {index === 0 ? 'em andamento' : index === 1 ? 'Concluído' : 'Finalizado'}
                </span></p>
                <p><strong>Dono:</strong> <span className={`owner ${index === 0 ? 'aguardando' : index === 1 ? 'caminho' : ''}`}>
                  {index === 0 ? 'Aguardando' : index === 1 ? 'A caminho' : ''}
                </span></p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
