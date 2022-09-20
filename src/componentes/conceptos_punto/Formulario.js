import React from 'react'
import Form from 'react-bootstrap/Form';

const Formulario = () => {
  return (
      <div className="container">
          {/* <div className="row" >
            <Form.Label htmlFor="id">Id</Form.Label>
            <Form.Control type="text" id="id"/>
          </div> */}
          <div className="row" >
            <Form.Label htmlFor="descripcion">Descripcion</Form.Label>
            <Form.Control as="textarea" placeholder="Deja una descripcion aquí" id="descripcion"/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="puntos_requeridos">Puntos requeridos</Form.Label>
            <Form.Control type="number" min="0" id="puntos_requeridos"/>
          </div>
      </div>
  )
}

export default Formulario