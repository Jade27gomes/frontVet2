import React from 'react';
import './pagFoto.css';
import recepcaoImg from '../img/recepcaoImg.jpg';
import consultorioImg from '../img/consultorioImg.jpg';


const PagFoto = () => {
  return (
    <div className="pagfoto-section">
      <h2 className="frase-chamada">Venha conhecer nossa estrutura moderna e acolhedora!</h2>
      <div className="imagens-container">
        <img src={recepcaoImg} alt="Recepção da clínica" className="imagem-clinica" />
        <img src={consultorioImg} alt="Sala de consulta" className="imagem-clinica" />
      </div>
    </div>
  );
};

export default PagFoto;
