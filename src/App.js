import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom";
import NavbarSis from './componentes/menu/NavbarSis'
import Login from './componentes/menu/Login'

function App() {
  return (
    <div className="App">
        <Outlet/>
    </div>
  );
}

export default App;
