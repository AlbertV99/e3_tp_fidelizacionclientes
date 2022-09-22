import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Panel as Cliente} from './componentes/cliente/Panel'
import {Panel as Conceptos} from './componentes/conceptos_punto/Panel'
import {Panel as ReglasPuntos} from './componentes/reglas_punto/Panel'
import {Panel as PuntosVencimiento} from './componentes/puntos_vencimiento/Panel'
import {Panel as BolsasPunto} from './componentes/bolsas_punto/Panel'
import Home from './componentes/menu/Home'
import House from './componentes/menu/Home'
import Bolsa from './componentes/reportes/bolsa_puntos'
import ConsultaClientes from './componentes/reportes/consulta_cliente';
import ConsultarMonto from './componentes/servicio/consultar_punto_ por_monto';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Home />} />
        <Route  path='home' element={<House/>} />
        <Route  path='clientes' element={<Cliente/>} />
        <Route  path='conceptos' element={<Conceptos/>} />
        <Route  path='reglasPuntos' element={<ReglasPuntos/>} />
        <Route  path='puntosVencimiento' element={<PuntosVencimiento/>} />
        <Route  path='bolsasPunto' element={<BolsasPunto/>} />
        <Route  path='bolsas' element={<Bolsa/>} />
        <Route  path='consulta_cliente' element={<ConsultaClientes/>} />
        <Route  path='consulta_monto' element={<ConsultarMonto/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
