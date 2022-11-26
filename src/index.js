import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Panel as Cliente} from './componentes/cliente/Panel'
import {Panel as Conceptos} from './componentes/conceptos_punto/Panel'
import {Panel as ReglasPuntos} from './componentes/reglas_punto/Panel'
import {Panel as SorteoPremios} from './componentes/sorteo_premios/Panel'
import {Panel as PuntosVencimiento} from './componentes/puntos_vencimiento/Panel'
import {Panel as BolsasPunto} from './componentes/bolsas_punto/Panel'
import Home from './componentes/menu/Home'
import Login from './componentes/menu/Login'
import House from './componentes/menu/Principal'
import Bolsa from './componentes/reportes/bolsa_puntos'
import ConsultaClientes from './componentes/reportes/consulta_cliente';
import ConsultaPuntosVencer from './componentes/reportes/consulta_cliente_puntos';
import ConsultarMonto from './componentes/servicio/consultar_punto_ por_monto';
import UsoPunto from './componentes/reportes/uso_puntos';
import CargarPuntos from './componentes/servicio/carga_puntos';
import UtilizarPuntos from './componentes/servicio/utilizar_puntos';
import ConsultaBolsaRango from './componentes/reportes/consulta_bolsa';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Login />} />
        <Route  path='Login' element={<Login/>} />
        <Route  path='home' element={<House/>} >
            <Route index element={<Home />} />

            <Route  path='clientes' element={<Cliente/>} />
            <Route  path='conceptos' element={<Conceptos/>} />
            <Route  path='reglasPuntos' element={<ReglasPuntos/>} />
            <Route  path='puntosVencimiento' element={<PuntosVencimiento/>} />
            <Route  path='sorteoPremios' element={<SorteoPremios/>} />
            <Route  path='usopunto' element={<UsoPunto/>} />
            <Route  path='bolsasPunto' element={<BolsasPunto/>} />
            <Route  path='consulta_cliente' element={<ConsultaClientes/>} />
            <Route  path='consulta_cliente_puntos' element={<ConsultaPuntosVencer/>} />
            <Route  path='consulta_bolsa_puntos' element={<ConsultaBolsaRango/>} />
            <Route  path='consulta_monto' element={<ConsultarMonto/>} />
            <Route  path='carga_puntos' element={<CargarPuntos/>} />
            <Route  path='utilizar_puntos' element={<UtilizarPuntos/>} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
