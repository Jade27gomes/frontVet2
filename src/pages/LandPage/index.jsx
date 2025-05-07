import React from 'react';
import './index.css';
import Header from '../../components/header';
import QuemSomosNos from '../../components/quemSomos';
import Footer from '../../components/footer';
import Servicos from '../../components/servicos';
import PagFoto from '../../components/pagFoto';
import Capa from '../../components/capa';


export default function LandPage() {
  return (
    <><div className="header">
        <Header />
      </div><div className="capa">
        <Capa />
      </div><div className="quem-somos-container">
        <QuemSomosNos />
      </div><div className="servicos">
        <Servicos />
      </div><div className="pagfotos">
        <PagFoto />
      </div><div className="footer">
        <Footer />
    </div></>
    );
}