import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AreaVet from './pages/AreaVet/login';
import CadastroCliente from './pages/AreaVet/cadastroCliente';
import CadastroPet from './pages/AreaVet/cadastroPet';
import Dashboard from './pages/AreaVet/dashboard';
import ServicoAnimal from './pages/AreaVet/servicosVet';
import LandPage from './pages/LandPage';
import CadastroServicoVet from './pages/AreaVet/cadastroServicoVet';
import Clientes from './pages/AreaVet/clientes';
import Pets from './pages/AreaVet/pets';
import AlterarCadastroPet from './pages/AreaVet/AlterarCadastroPet';
import AlterarCadastroCliente from './pages/AreaVet/AlterarCadastroUsuario';
import AlterarCadastroAtendimento from './pages/AreaVet/AlterarCadastroAtendimento';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<AreaVet/>} />

        <Route path = '/cadastroCliente' element = {<CadastroCliente/>} />
        <Route path = '/clientes' element = {<Clientes/>} /> 
        <Route path = '/alterarCadastroCliente/:id' element = {<AlterarCadastroCliente/>} />

        <Route path = '/cadastroPet' element = {<CadastroPet/>} />
        <Route path = '/alterarCadastroPet/:id' element = {<AlterarCadastroPet/>} />

        <Route path = '/pets' element = {<Pets/>} />
        
        <Route path = '/dashboard' element = {<Dashboard/>} />
        
        <Route path = '/cadastroServicoVet' element = {<CadastroServicoVet/>} />
        <Route path = '/servicoAnimal' element = {<ServicoAnimal/>} />
        <Route path = '/alterarCadastroAtendimento/:id' element = {<AlterarCadastroAtendimento/>} />


        <Route path = '/landpage' element = {<LandPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

