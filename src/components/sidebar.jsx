import React from 'react';
import logo from '../img/logologin.png';
import { FiLogOut } from 'react-icons/fi';
import './sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={logo} alt="Logo Dog" className="logo" />
      <h2 className="logo-title">Dog’s</h2>
      <nav>
        <ul>
          <li><Link to = '/dashboard'>📋 Dashboard</Link></li>
          <li className="active"><Link to = '/clientes'>👤 Clientes</Link></li>
          <li><Link to = '/servicoAnimal'>🧳 Serviços</Link></li>
          <li><Link to = '/pets'>🐾 Animais</Link></li>
        </ul>
      </nav>
      <button className="logout-btn"><Link to = "/">Sair <FiLogOut /></Link></button>
    </aside>
  );
}
 