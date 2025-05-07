import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function AreaVet() {
  return (
    <div className="vet-login-container">
      <form className="vet-login-form">
        <img
          src={require('../../../img/logologin.png')}
          alt="Logo da Veterinária"
          className="vet-logo"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Luizincria@gmail.com"
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          placeholder=""
        />

        <div className="vet-options">
          <label className="vet-checkbox">
            <input type="checkbox" />
            Continuar conectado
          </label>
          <a href="/" className="vet-esqueci-senha">Esqueci minha senha</a>
        </div>

        <button type="submit" className="vet-login-button"><Link to = "/dashboard">Entrar</Link></button>
      </form>

      <div className="vet-login-footer" />
    </div>
  );
}