// Capa.js
import React from 'react';
import './capa.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function Capa() {
  return (
    <div className="vet-background">
      <div className="vet-card">
        <h1 className="vet-title">Veterinária Bagdá</h1>
        <p className="vet-description">
          Cuidamos do seu pet com carinho e dedicação<br />
          para uma vida mais saudável e feliz.
        </p>
        <hr className="vet-divider" />
        <button className="vet-button">
          <FaWhatsapp size={16} />
          AGENDAR CONSULTA PELO WHATSAPP
        </button>
      </div>
    </div>
  );
}