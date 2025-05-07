import React from 'react';
import './capa.css';


export default function Capa() {
  return (
        <div className="vet-container">
          <div className="vet-card">
            <h1 className="vet-title">Veterinária Bagdá</h1>
            <p className="vet-description">
              Cuidamos do seu pet com carinho e dedicação<br />
              para uma vida mais saudável e feliz.
            </p>
            <button className="vet-button">AGENDAR CONSULTA PELO WHATSAPP</button>
          </div>
          <img
            src={require('../img/page2.png')}
            alt="mascotes"
            title="img mascotes"
            className="vet-image"
          />
        </div>
  );
}
