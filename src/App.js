import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom";
import NavbarSis from './componentes/menu/NavbarSis'

function App() {
  return (
    <div className="App">
      <NavbarSis/>
      <Outlet/>
    </div>
  );
}

export default App;
