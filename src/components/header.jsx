import React from 'react';
import './header.css';
import { Link } from 'react-scroll'; // <- IMPORTA O LINK CORRETO AQUI

export default function Header() {
  return (
    <header className="header">
      <h1>VetBagda</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="inicio" smooth={true} duration={500}>Início</Link>
          </li>
          <li>
            <Link to="quem-somos-container" smooth={true} duration={500}>Quem somos</Link>
          </li>
          <li>
            <Link to="servicos" smooth={true} duration={500}>Serviços</Link>
          </li>
          <li>
            <a href="/">Área do Vet</a> {/* Link para outra rota */}
          </li>
        </ul>
      </nav>
    </header>
  );
}
