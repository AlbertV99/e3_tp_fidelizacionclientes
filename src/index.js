import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Panel as Cliente} from './componentes/cliente/Panel'
import {Panel as Conceptos} from './componentes/conceptos_punto/Panel'
import {Panel as ReglasPuntos} from './componentes/reglas_punto/Panel'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route  path='clientes' element={<Cliente/>} />
        <Route  path='conceptos' element={<Conceptos/>} />
        <Route  path='reglasPuntos' element={<ReglasPuntos/>} />
      </Route>
    </Routes>
    
  </BrowserRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
