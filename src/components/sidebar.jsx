import React from 'react';
import logo from '../img/logologin.png';
import { FiLogOut } from 'react-icons/fi';
import './sidebar.css';

export default function Sidebar() {
  return (
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
  );
}
 