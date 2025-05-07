import React from 'react';
import './pagFoto.css';
import recepcaoImg from '../img/recepcaoImg.jpg';
import consultorioImg from '../img/consultorioImg.jpg';

const PagFoto = () => {
  return (
    <div className="imagens-container">
      <img src={recepcaoImg} alt="Recepção da clínica" className="imagem-PagFoto" />
      <img src={consultorioImg} alt="Sala de consulta" className="imagem-PagFoto" />
    </div>
  );
};

export default PagFoto;
