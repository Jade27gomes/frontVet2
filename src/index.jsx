import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AreaVet from './pages/AreaVet/login';
import CadastroCliente from './pages/AreaVet/cadastroCliente';
import CadastroPet from './pages/AreaVet/cadastroPet';
import Dashboard from './pages/AreaVet/dashboard';
import ServicoAnimal from './pages/AreaVet/servicosVet';
import CadastroServicoVet from './pages/AreaVet/cadastroServicoVet';
import LandPage from './pages/LandPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<AreaVet/>} />
        <Route path = '/cadastroCliente' element = {<CadastroCliente/>} />
        <Route path = '/cadastroPet' element = {<CadastroPet/>} />
        <Route path = '/dashboard' element = {<Dashboard/>} />
        <Route path = '/servicoAnimal' element = {<ServicoAnimal/>} />
        <Route path = '/cadastroServicoVet' element = {<CadastroServicoVet/>} />
        <Route path = '/landpage' element = {<LandPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

