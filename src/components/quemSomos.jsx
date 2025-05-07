import React from 'react';
import './quemSomos.css';
import coupleImage from '../img/couple.png';
import bgImage from '../img/page2.png';

function QuemSomosNos() {
    return (
      <div className="quem-somos-container">
        <img src={bgImage} alt="fundo" className="background-image" />
        
        <div className="content-wrapper">
          <img src={coupleImage} alt="Casal de veterinários" className="couple-image" />
          
          <div className="text-content">
            <h2>Quem Somos Nós?</h2>
            <p>
              Nossa equipe é composta por <strong>profissionais capacitados</strong>, com mais de 20 anos de experiência.
            </p>
            <p>
              Oferecemos serviços personalizados para atender às necessidades do seu pet, tudo em um <strong>ambiente acolhedor</strong>, onde seu companheiro será tratado com o carinho e respeito que ele merece.
            </p>
            <p>
              Com mais de duas décadas de dedicação à medicina veterinária, <strong>MV. Georgia Sartori</strong>, atua como clínica geral com especializações em <strong>Anestesia Inalatória</strong> e <strong>Acupuntura</strong>.
            </p>
            <p>
              Com uma trajetória sólida e anos de experiência, <strong>MV. Alexandre Oliveira</strong>, clínico geral e especialista em <strong>Oftalmologia</strong>, é referência no <strong>diagnóstico preciso</strong> e <strong>tratamento avançado</strong> de condições oculares em animais.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default QuemSomosNos;