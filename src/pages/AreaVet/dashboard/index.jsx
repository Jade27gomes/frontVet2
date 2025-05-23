import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-cards">
        <button className="card-clientes">
          <Link to="/Clientes">👤 CLIENTES</Link>
        </button>
        <button className="card-pets">
          <Link to="/Pets">🐾 PETS</Link>
        </button>
        <button className="card-atendimento">
          <Link to="/servicoanimal">💬 ATENDIMENTO</Link>
        </button>
      </div>
      <button className="logout-button">
        <Link to="/">↩️ Sair</Link>
      </button>
    </div>
  );
}

export default Dashboard;
