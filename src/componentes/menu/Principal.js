import React from 'react'
import NavbarSis from './NavbarSis'
import { Outlet } from "react-router-dom";



const Home = () =>{
    return (
        <>
            <NavbarSis/>
            <br/>
            <Outlet/>
        </>
    );
  }

  export default Home
