import React from 'react';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <h1>VetBagda</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#quem-somos">Quem somos</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#area-vet">Área do Vet</a></li>

        </ul>
      </nav>
    </header>
  );
}
 