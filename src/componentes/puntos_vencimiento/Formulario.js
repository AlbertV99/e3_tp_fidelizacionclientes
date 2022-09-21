import React from 'react'
import Form from 'react-bootstrap/Form';

const Formulario = () => {
  return (
      <div className="container">
          <div className="row" >
            <Form.Label htmlFor="f_inicio">Fecha de inicio</Form.Label>
            <Form.Control type="date" id="f_inicio"/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="f_fin">Fecha de inicio</Form.Label>
            <Form.Control type="date" id="f_fin"/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="duracion">Duracion</Form.Label>
            <Form.Control type="text" id="duracion"/>
          </div>
      </div>
  )
}

export default Formulario
