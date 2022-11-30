import React from 'react'
import Form from 'react-bootstrap/Form';

const Formulario = () => {
  return (
      <div className="container">
          <div className="row" >
            <Form.Label htmlFor="cliente">Cliente</Form.Label>
            <Form.Control type="text" id="cliente"/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="f_asig">Fecha de asignacion</Form.Label>
            <Form.Control type="date" id="f_asig"/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="f_cad">Fecha de caducidad</Form.Label>
            <Form.Control type="date" id="f_cad"/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="p_asig">Puntaje asignado</Form.Label>
            <Form.Control type="text" id="p_asig"/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="p_util">Puntaje utilizado</Form.Label>
            <Form.Control type="text" id="p_util"/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="p_saldo">Saldo de puntos</Form.Label>
            <Form.Control type="text" id="p_saldo"/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="monto">Monto</Form.Label>
            <Form.Control type="text" id="monto"/>
          </div>
      </div>
  )
}

export default Formulario
