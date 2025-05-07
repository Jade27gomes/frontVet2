import React from 'react';
import './servicos.css';


const services = [
  {
    title: 'Clínica Geral',
    description: 'O serviço de clínica geral centra com exames de rotina, vacinações, diagnósticos preliminares, cirurgias, controle de parcelas, orientação multilínea e comportamento. Vendo a saúde geral e a prevenção.'
  },
  {
    title: 'Acupuntura',
    description: 'A acupuntura veterinária é uma abordagem terapêutica que possibilita o alívio da dor, o gerenciamento de condições crônicas e o estrutura dos equilíbrio energético, promovendo a saúde e o bem-estar de forma holística.'
  },
  {
    title: 'Oftalmologia',
    description: 'A oftalmologia veterinária é especializada na saúde locular de animais de estimação, oferecendo diagnóstico, tratamento e cirurgias para uma variedade de condições visuais, com o objetivo de preservar a visão à melhora: o bem-estar dos animais.'
  },
  {
    title: 'Ortopedia',
    description: 'A ortopedia veterinária trata de lesões e condições do sistema músculo-esquelético de animais de estimação, através de diagnóstico, tratamentos e cirurgias para restaurar a mobilidade, olhar dores.'
  },
  {
    title: 'Exames',
    description: 'Exames laboratoriais veterinários possibilitam realizar análises precisas de amostras biológicas para diagnosticar doenças, monitorar a saúde e atender tratamentos de animais de estimação.'
  },
  {
    title: 'Estética Animal',
    description: 'Estética animal oferece banho, tosa e tratamentos específicos para manter o higiene, básico e bem-estar dos pais, garantindo conforto a cuidado especificado dentro de transporte dedicado para seu pai.'
  }
];

export default function Servicos() {
  return (
    <div className="services-container">
      <h1 className="title">Nossos Serviços</h1>
      <p className="subtitle">Tudo que seu animalzinho precisa em um só lugar</p>
      <div className="cards">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}